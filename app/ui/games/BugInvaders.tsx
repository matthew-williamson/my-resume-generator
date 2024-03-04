import React, { useEffect, useRef, useState } from "react";
import { useKeyboardControls } from "../hooks/useKeyboardControls";
import {
  Alert,
  Button,
  Divider,
  IconButton,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import {
  DragHandle,
  HelpOutline,
  Pause,
  PestControl,
  RocketLaunch,
} from "@mui/icons-material";
import { ulid } from "ulid";
import useWindowSize from "../hooks/useWindowSize";

const generateRandomNumber = () => {
  return Math.floor(Math.random() * 501); // Generates a random number between 0 (inclusive) and 501 (exclusive)
};

const TopRow = ({
  playing,
  setPlaying,
}: {
  playing: boolean;
  setPlaying: (playing: boolean) => void;
}) => (
  <Stack
    direction="row"
    sx={{
      justifyContent: "space-between",
      alignItems: "center",
      backgroundColor: "rgba(0, 0, 0, 0.7)",
      px: 2,
      height: 48,
    }}
  >
    <Typography fontWeight={700} color="#99CCFF">
      Bug Invaders
    </Typography>
    {playing ? (
      <IconButton
        sx={{
          color: "#99CCFF !important",
          ":hover": {
            opacity: 0.7,
          },
        }}
        onClick={() => setPlaying(false)}
      >
        <Pause />
      </IconButton>
    ) : null}
  </Stack>
);

const BottomRow = ({ score }: { score: number }) => (
  <Stack
    direction="row"
    sx={{
      justifyContent: "space-between",
      alignItems: "center",
      backgroundColor: "rgba(0, 0, 0, 0.7)",
      px: 2,
      height: 48,
    }}
  >
    <Typography fontWeight={700} variant="body2" color="#99CCFF">
      Score: {score}
    </Typography>
    <Tooltip
      title={
        <Stack spacing={1}>
          <Typography variant="caption">
            Bug Invaders was a fun challenge to see if I could build a
            recreation of the classic Space Invaders game using nothing besides
            the build-in React hooks and TypeScript. I used MUI for the
            bug/player/missile sprites. Enjoy!
          </Typography>
          <Divider />
          <Stack>
            <Typography variant="caption">
              - Left arrow key moves left
            </Typography>
            <Typography variant="caption">
              - Right arrow key moves right
            </Typography>
            <Typography variant="caption">
              - Shift key to fire missiles
            </Typography>
            <Typography variant="caption">
              - Escape key to pause the game
            </Typography>
          </Stack>
        </Stack>
      }
    >
      <HelpOutline
        sx={{
          color: "#99CCFF",
          fontSize: "20px",
          ":hover": { opacity: 0.8 },
        }}
      />
    </Tooltip>
  </Stack>
);

interface SpriteData {
  id: string;
  left?: number;
  top?: number;
}

const INITIAL_TOP = 5;
const MISSILE_OFFSET = 64;
const HORIZONTAL_MOVE_SPEED = 5;
const VERTICAL_MOVE_SPEED = 0.9;
const GAME_UPDATE_RATE_IN_MS = 10;
const INITIAL_SCORE = 0;
const SPRITE_OFFSET = 28;
const GAME_WINDOW = 500;
const INITIAL_POSITION = GAME_WINDOW / 2 - SPRITE_OFFSET / 2;
const RIGHT_BOUND = GAME_WINDOW - SPRITE_OFFSET;
const LEFT_BOUND = 0;

const Invader = ({ id, left, top }: SpriteData) => (
  <PestControl
    id={id}
    className="invader-sprite"
    sx={{
      color: "#FFCCCC",
      position: "absolute",
      left,
      top,
      fontSize: `${SPRITE_OFFSET}px`,
      transform: "rotate(180deg)",
    }}
  />
);

const Missile = ({ id, left, top }: SpriteData) => (
  <DragHandle
    id={id}
    className="missile-sprite"
    sx={{
      transform: "rotate(90deg)",
      position: "absolute",
      left,
      top,
      fontSize: `${SPRITE_OFFSET / 2}px`,
      color: "orange",
    }}
  />
);

const initialInvaders: SpriteData[] = [];
const initialMissiles: SpriteData[] = [];

const SpaceInvaders = () => {
  const windowSize = useWindowSize();
  const [initialWindowSize, setInitialWindowSize] = useState(0);
  useEffect(() => {
    setInitialWindowSize(window.innerWidth);
  }, []);
  const width = windowSize.width ?? initialWindowSize;

  const gameWindowRef = useRef<HTMLDivElement>(null);
  const playerSpriteRef = useRef<SVGSVGElement>(null);

  const [playing, setPlaying] = useState(false);
  const [invaders, setInvaders] = useState<SpriteData[]>(initialInvaders);
  const [playerPosition, setPlayerPosition] = useState(INITIAL_POSITION);
  const [score, setScore] = useState(INITIAL_SCORE);
  const [highScore, setHighScore] = useState(INITIAL_SCORE);
  const [lastScore, setLastScore] = useState(INITIAL_SCORE);
  const [missiles, setMissiles] = useState<SpriteData[]>(initialMissiles);
  const [hasLost, setHasLost] = useState(false);

  useEffect(() => {
    if (!hasLost) {
      return;
    }

    setMissiles(initialMissiles);
    setInvaders(initialInvaders);
    setPlayerPosition(INITIAL_POSITION);
    setScore(INITIAL_SCORE);
    setPlaying(false);
  }, [hasLost]);

  useEffect(() => {
    setHighScore((prevHighScore) =>
      prevHighScore > score ? prevHighScore : score
    );
    if (score) {
      setLastScore(score);
    }
  }, [score]);

  // Game state controller
  // Handles moving, shooting, and the game state loop
  useEffect(() => {
    let moveLeft = false;
    let moveRight = false;
    let loopHasLost = false;
    let loopMSTimer = 0;

    const handleKeyDown = (event: globalThis.KeyboardEvent) => {
      if (!playing) {
        return;
      }

      // move left
      if (event.key === "ArrowLeft") {
        moveLeft = true;
        return;
      }

      // move right
      if (event.key === "ArrowRight") {
        moveRight = true;
        return;
      }

      // pause game
      if (event.key === "Escape") {
        setPlaying(false);
        return;
      }

      // fire missiles
      if (event.key === "Shift") {
        // Get player position dynamically, not state based. Unfortunate, but it is what it is.
        const playerPositionData =
          playerSpriteRef.current?.getBoundingClientRect();

        if (!playerPositionData) {
          return;
        }

        setMissiles((prevMissiles) => [
          ...prevMissiles,
          {
            id: ulid(),
            left: playerPositionData.left,
            top: playerPositionData.top - MISSILE_OFFSET,
          },
        ]);
        return;
      }
    };

    const handleKeyUp = (event: globalThis.KeyboardEvent) => {
      // Stop moving left
      if (event.key === "ArrowLeft") {
        moveLeft = false;
        return;
      }

      // Stop moving right
      if (event.key === "ArrowRight") {
        moveRight = false;
        return;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    // This is the actual game loop
    const intervalId: NodeJS.Timeout = setInterval(() => {
      if (!playing) {
        return;
      }

      let addInvader = loopMSTimer === 0;
      // Before we do anything, see if we've hit enough time to add a new invader
      if (loopMSTimer < GAME_UPDATE_RATE_IN_MS * 100) {
        loopMSTimer += GAME_UPDATE_RATE_IN_MS;
      } else {
        loopMSTimer = 0;
      }

      const missileElements = Array.from(
        document.getElementsByClassName("missile-sprite")
      );
      const invaderElements = Array.from(
        document.getElementsByClassName("invader-sprite")
      );

      // Check dynamically if any collisions have happened in this round of looping.
      let scoreModifier = 0;
      const invadersToRemove: Element[] = [];
      const missilesToRemove: Element[] = [];
      for (const missile of missileElements) {
        const missileBounds = missile.getBoundingClientRect();
        const missileLeft = missileBounds.left;
        const missileTop = missileBounds.top;

        // check if any missiles have hit any invaders
        const hitInvader = invaderElements.find((invader) => {
          const invaderBounds = invader.getBoundingClientRect();
          const invaderLeft = invaderBounds.left;
          const invaderTop = invaderBounds.top;

          const invaderRightEdge = invaderLeft + SPRITE_OFFSET;
          const invaderLeftEdge = invaderLeft;
          const invaderTopEdge = invaderTop;
          const invaderBottomEdge = invaderTop + SPRITE_OFFSET;

          const missileMiddle = missileLeft + SPRITE_OFFSET / 2;
          const isWithinLeftToRight =
            missileMiddle >= invaderLeftEdge &&
            missileMiddle <= invaderRightEdge;
          const isWithinTopToBottom =
            missileTop <= invaderBottomEdge && missileTop >= invaderTopEdge;

          return isWithinLeftToRight && isWithinTopToBottom;
        });

        if (hitInvader) {
          scoreModifier += 1;
          // Remove both missile and invader
          invadersToRemove.push(hitInvader);
          missilesToRemove.push(missile);
        }
      }

      if (scoreModifier) {
        setScore((prevScore) => prevScore + scoreModifier);
      }

      // Handle player sprite movement
      if (moveLeft) {
        setPlayerPosition((prevPosition) =>
          prevPosition - HORIZONTAL_MOVE_SPEED >= LEFT_BOUND
            ? prevPosition - HORIZONTAL_MOVE_SPEED
            : LEFT_BOUND
        );
      } else if (moveRight) {
        setPlayerPosition((prevPosition) =>
          prevPosition + HORIZONTAL_MOVE_SPEED <= RIGHT_BOUND
            ? prevPosition + HORIZONTAL_MOVE_SPEED
            : RIGHT_BOUND
        );
      }

      // Handle missile movement
      setMissiles((prevMissiles) => {
        // Update all missiles, but then filter out any that are "out of screen" now (i.e. missed target)
        const gameBounds = gameWindowRef.current?.getBoundingClientRect();
        if (!gameBounds) {
          return prevMissiles;
        }

        return prevMissiles.reduce((acc, missile) => {
          const newTop = (missile.top || 0) - VERTICAL_MOVE_SPEED * 5;
          // Did this missile fly out of bounds?
          if (
            newTop < gameBounds.top - MISSILE_OFFSET ||
            missilesToRemove.some(
              (missileToRemove) =>
                missileToRemove.getAttribute("id") === missile.id
            )
          ) {
            return acc;
          }

          acc.push({ ...missile, top: newTop });
          return acc;
        }, [] as SpriteData[]);
      });

      // Handle bug movement
      setInvaders((prevInvaders) => {
        const gameBounds = gameWindowRef.current?.getBoundingClientRect();
        if (!gameBounds) {
          return prevInvaders;
        }

        const newInvaders = prevInvaders.reduce((acc, invader) => {
          const newTop = (invader.top || 0) + VERTICAL_MOVE_SPEED * 2;
          if (newTop > gameBounds.top + 350) {
            loopHasLost = true;
            return acc;
          }

          if (
            invadersToRemove.some(
              (invaderToRemove) =>
                invaderToRemove.getAttribute("id") === invader.id
            )
          ) {
            return acc;
          }

          const randomNumber = Math.random();
          const leftOrRightFactor = randomNumber <= 0.7 ? -1 : 1;
          const movement =
            leftOrRightFactor * HORIZONTAL_MOVE_SPEED * randomNumber;
          let newLeft = (invader.left || 0) + movement;

          newLeft =
            newLeft <= RIGHT_BOUND
              ? newLeft >= LEFT_BOUND
                ? newLeft
                : LEFT_BOUND
              : RIGHT_BOUND;

          acc.push({
            id: invader.id,
            top: newTop,
            left: newLeft,
          });

          return acc;
        }, [] as SpriteData[]);

        if (addInvader) {
          newInvaders.push({
            id: ulid(),
            top: INITIAL_TOP,
            left: generateRandomNumber(),
          });
        }

        return newInvaders;
      });

      // Handle game losses
      if (loopHasLost) {
        setHasLost(loopHasLost);
      }
    }, GAME_UPDATE_RATE_IN_MS);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
      clearInterval(intervalId);
    };
  }, [playing, hasLost]);

  const gameComponents = (
    <>
      {invaders.map((invader) => (
        <Invader
          key={invader.id}
          id={invader.id}
          left={invader.left}
          top={invader.top}
        />
      ))}
      {missiles.map((missile) => (
        <Missile
          key={missile.id}
          left={missile.left}
          top={missile.top}
          id={missile.id}
        />
      ))}
      <RocketLaunch
        ref={playerSpriteRef}
        id="player-sprite"
        sx={{
          color: "#99CCFF",
          position: "absolute",
          bottom: INITIAL_TOP,
          left: playerPosition,
          fontSize: "28px",
          transform: "rotate(-45deg)",
        }}
      />
    </>
  );

  const game = (
    <Stack
      sx={{
        width: GAME_WINDOW,
        height: GAME_WINDOW,
        justifyContent: "space-between",
      }}
    >
      <TopRow playing={playing} setPlaying={setPlaying} />
      <Stack
        sx={{
          alignItems: "center",
          backgroundColor: "black",
          height: "100%",
          justifyContent: "center",
          position: "relative",
          overflow: "hidden",
        }}
        ref={gameWindowRef}
      >
        {!playing ? (
          <Stack
            sx={{ justifyContent: "center", alignItems: "center" }}
            spacing={2}
          >
            {hasLost ? (
              <Alert severity="error" icon={<></>}>
                <Stack spacing={1}>
                  <Typography fontWeight={700} variant="caption">
                    GAME OVER!
                  </Typography>
                  <Typography fontWeight={700} variant="caption">
                    THE BUG MADE IT TO PRODUCTION!
                  </Typography>
                  <Typography fontWeight={700} variant="caption">
                    ROUND SCORE: {lastScore}
                  </Typography>
                  <Typography fontWeight={700} variant="caption">
                    HIGH SCORE: {highScore}
                  </Typography>
                </Stack>
              </Alert>
            ) : null}
            <Button
              sx={{ color: "#99CCFF", width: "fit-content" }}
              variant="outlined"
              onClick={() => {
                setHasLost(false);
                setPlaying(true);
              }}
            >
              PLAY{hasLost ? " AGAIN" : ""}
            </Button>
          </Stack>
        ) : null}
        {gameComponents}
      </Stack>
      <BottomRow score={score} />
    </Stack>
  );

  return (
    <Stack
      spacing={1}
      sx={{
        backgroundColor: "#1A1A1A",
        borderRadius: 2,
        border: "1px solid rgba(255, 255, 255, 0.12)",
        p: 2,
        flex: 1,
      }}
    >
      {game}
    </Stack>
  );
};

export default SpaceInvaders;
