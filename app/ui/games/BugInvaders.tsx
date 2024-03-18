/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  Alert,
  Button,
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
  VolumeOff,
  VolumeUp,
} from "@mui/icons-material";
import { ulid } from "ulid";
import { isMobile } from "react-device-detect";
import CollapsibleSection from "../shared/CollapsibleSection";
import Highlight from "../shared/Highlight";

interface SpriteData {
  id: string;
  left?: number;
  top?: number;
}

const INITIAL_TOP = 5;
const MISSILE_OFFSET = 64;
const HORIZONTAL_MOVE_SPEED = 10;
const VERTICAL_MOVE_SPEED = 0.7;
const GAME_UPDATE_RATE_IN_MS = 25;
const INITIAL_SCORE = 0;
const SPRITE_OFFSET = 28;
const GAME_HEIGHT = 650;
const INITIAL_POSITION = 0;
const LEFT_BOUND = 0;
const FULL_PAYLOAD = 3;
const PAYLOAD_RELOAD_WAIT = 1000 * 3; // 3s in MS

const initialInvaders: SpriteData[] = [];
const initialMissiles: SpriteData[] = [];

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

const PayloadIndicator = ({ hasPayload }: { hasPayload?: boolean }) => (
  <DragHandle
    sx={{
      transform: "rotate(90deg)",
      fontSize: `${SPRITE_OFFSET / 2}px`,
      color: hasPayload
        ? "rgba(190, 253, 200, 1)"
        : "rgba(255, 255, 255, 0.12)",
    }}
  />
);

const generateRandomNumber = (upperBound: number) => {
  return Math.floor(Math.random() * upperBound); // Generates a random number between 0 (inclusive) and 501 (exclusive)
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
    {playing ? (
      <IconButton
        sx={{
          color: "#99CCFF !important",
          ":hover": { color: "rgba(190, 253, 200, 0.6)" },
        }}
        onClick={() => setPlaying(false)}
      >
        <Pause />
      </IconButton>
    ) : null}
  </Stack>
);

const BottomRow = ({
  score,
  payload,
  volumeOff,
  setVolumeOff,
}: {
  score: number;
  payload: number;
  volumeOff: boolean;
  setVolumeOff: (volumeOff: boolean) => void;
}) => {
  const payloadIndicators = useMemo(() => {
    const elements = [];
    for (let i = 0; i < payload; i += 1) {
      elements.push(<PayloadIndicator key={`payload-${i}`} hasPayload />);
    }

    while (elements.length < FULL_PAYLOAD) {
      elements.push(
        <PayloadIndicator key={`empty-payload-${elements.length}`} />
      );
    }

    return (
      <Stack direction="row" sx={{ alignItems: "center" }}>
        <Typography fontWeight={700} variant="body2" color="#99CCFF">
          Cannon:
        </Typography>
        {elements}
      </Stack>
    );
  }, [payload]);

  return (
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
      <Stack direction="row" spacing={3} sx={{ alignItems: "center" }}>
        <Typography fontWeight={700} variant="body2" color="#99CCFF">
          Score: {score}
        </Typography>
        {payloadIndicators}
      </Stack>
      <Stack direction="row" spacing={3} sx={{ alignItems: "center" }}>
        <Stack direction="row" sx={{ alignItems: "center" }} spacing={0.25}>
          {payload < FULL_PAYLOAD ? (
            <Typography
              variant="caption"
              fontWeight={700}
              color="rgba(190, 253, 200, 1)"
            >
              Recharging...
            </Typography>
          ) : null}
        </Stack>
        <IconButton onClick={() => setVolumeOff(!volumeOff)}>
          {!volumeOff ? (
            <VolumeUp
              sx={{
                color: "#99CCFF",
                fontSize: "20px",
                ":hover": { color: "rgba(190, 253, 200, 0.6)" },
              }}
            />
          ) : (
            <VolumeOff
              sx={{
                color: "#99CCFF",
                fontSize: "20px",
                ":hover": { color: "rgba(190, 253, 200, 0.6)" },
              }}
            />
          )}
        </IconButton>
        <Tooltip
          title={
            <Stack spacing={1}>
              <Stack>
                <Typography variant="caption">
                  - Left arrow key moves left
                </Typography>
                <Typography variant="caption">
                  - Right arrow key moves right
                </Typography>
                <Typography variant="caption">
                  - Space bar to fire missiles
                </Typography>
                <Typography variant="caption">
                  - Escape key to pause the game
                </Typography>
                <Typography variant="caption">
                  - Your ship is equipped with a plasma cannon that that has a
                  cooldown of 3 seconds. It can fire 3 blasts within any 3
                  second window. If you fire all 3 quickly, you will be
                  defenseless against the oncoming bugs until the cannon
                  recharges. Use your cannon wisely!
                </Typography>
              </Stack>
            </Stack>
          }
        >
          <HelpOutline
            sx={{
              color: "#99CCFF",
              fontSize: "20px",
              ":hover": { color: "rgba(190, 253, 200, 0.6)" },
            }}
          />
        </Tooltip>
      </Stack>
    </Stack>
  );
};

const generateInvaderMovementPattern = (
  initialLeft: number,
  gameWidth: number
) => {
  const randomNumber = Math.random();

  const randomLargeNumber = 100 * randomNumber;

  const leftBound = Math.max(
    LEFT_BOUND, // literal left bound
    initialLeft - randomLargeNumber - 30
  );

  const rightBound = Math.min(
    gameWidth - SPRITE_OFFSET, // literal right bound
    initialLeft + randomLargeNumber + 30
  );

  const movementSpeed = HORIZONTAL_MOVE_SPEED / 3;

  const direction = randomNumber <= 0.7 ? -1 : 1;

  return {
    leftBound,
    rightBound,
    movementSpeed,
    direction,
  };
};

let movementDataByInvaderId: Record<string, any> = {};

const calculateMovement = (
  invaderId: string,
  invaderLeft = 0,
  gameWidth = 0
) => {
  if (!movementDataByInvaderId[invaderId]) {
    movementDataByInvaderId[invaderId] = generateInvaderMovementPattern(
      invaderLeft,
      gameWidth
    );
  }

  const { direction, leftBound, rightBound, movementSpeed } =
    movementDataByInvaderId[invaderId];

  const movement = direction * movementSpeed;

  let newLeft = invaderLeft + movement;

  if (direction === -1 && invaderLeft + movement <= leftBound) {
    // will we hit the left wall
    newLeft = leftBound;
    movementDataByInvaderId[invaderId].direction = direction * -1;
  } else if (direction === 1 && invaderLeft + movement >= rightBound) {
    newLeft = rightBound;
    movementDataByInvaderId[invaderId].direction = direction * -1;
  }

  return newLeft;
};

const SpaceInvaders = () => {
  const gameWindowRef = useRef<HTMLDivElement>(null);
  const playerSpriteRef = useRef<SVGSVGElement>(null);

  const [playing, setPlaying] = useState(false);
  const [invaders, setInvaders] = useState<SpriteData[]>(initialInvaders);
  const [playerPosition, setPlayerPosition] = useState(INITIAL_POSITION);
  const [score, setScore] = useState(INITIAL_SCORE);
  const [highScore, setHighScore] = useState(INITIAL_SCORE);
  const [roundScore, setRoundScore] = useState(INITIAL_SCORE);
  const [missiles, setMissiles] = useState<SpriteData[]>(initialMissiles);
  const [hasLost, setHasLost] = useState(false);
  const [payload, setPayload] = useState(FULL_PAYLOAD);
  const [volumeOff, setVolumeOff] = useState(false);

  useEffect(() => {
    if (!hasLost) {
      return;
    }

    setMissiles(initialMissiles);
    setInvaders(initialInvaders);
    movementDataByInvaderId = {};
    setPlayerPosition(
      (gameWindowRef.current?.getBoundingClientRect().width || 0) / 2
    );
    setScore(INITIAL_SCORE);
    setPlaying(false);
    setPayload(FULL_PAYLOAD);
  }, [hasLost]);

  useEffect(() => {
    setHighScore((prevHighScore) =>
      prevHighScore > score ? prevHighScore : score
    );
  }, [score]);

  // Game state controller
  // Handles moving, shooting, and the game state loop
  useEffect(() => {
    let moveLeft = false;
    let moveRight = false;
    let loopHasLost = false;
    let loopMSTimer = 0;
    let loopPayload = FULL_PAYLOAD;

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
      if (event.key === " ") {
        event.preventDefault();
        event.stopPropagation();
        if (loopPayload === 0) {
          return;
        }

        // Get player position dynamically, not state based. Unfortunate, but it is what it is.
        const playerBounds = playerSpriteRef.current?.getBoundingClientRect();
        const gameWindowBounds = gameWindowRef.current?.getBoundingClientRect();

        if (!playerBounds || !gameWindowBounds) {
          return;
        }

        loopPayload -= 1;
        setPayload(loopPayload);

        setMissiles((prevMissiles) => [
          ...prevMissiles,
          {
            id: ulid(),
            left: playerBounds.x - gameWindowBounds.x + SPRITE_OFFSET / 2,
            top: GAME_HEIGHT - 64 - MISSILE_OFFSET,
          },
        ]);

        if (!volumeOff) {
          const laserSound = new Audio("./laser.mp3");
          laserSound.volume = 0.1;
          laserSound.play();
          setTimeout(() => {
            laserSound.pause();
          }, 500);
        }
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

    if (!playing) {
      return;
    }

    // Reload loop
    const reloadLoop: NodeJS.Timeout = setInterval(() => {
      loopPayload = FULL_PAYLOAD;
      setPayload(loopPayload);
    }, PAYLOAD_RELOAD_WAIT);

    // This is the actual game loop
    const gameLoop: NodeJS.Timeout = setInterval(() => {
      let addInvader = loopMSTimer === 0;
      // Before we do anything, see if we've hit enough time to add a new invader
      if (loopMSTimer < GAME_UPDATE_RATE_IN_MS * 150) {
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
        const missileLeft = missileBounds.x;
        const missileTop = missileBounds.y;

        // check if any missiles have hit any invaders
        const hitInvader = invaderElements.find((invader) => {
          const invaderBounds = invader.getBoundingClientRect();
          const invaderLeft = invaderBounds.x;
          const invaderTop = invaderBounds.y;

          const invaderRightEdge = invaderLeft + invaderBounds.width;
          const invaderLeftEdge = invaderLeft;
          const invaderTopEdge = invaderTop;
          const invaderBottomEdge = invaderTop + invaderBounds.height;

          const missileMiddle = missileLeft + missileBounds.width / 2;
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

          if (!volumeOff) {
            const explosionSound = new Audio("./explosion.mp3");
            explosionSound.volume = 0.25;
            explosionSound.play();
          }
        }
      }

      if (scoreModifier) {
        setScore((prevScore) => prevScore + scoreModifier);
        setRoundScore((prevScore) => prevScore + scoreModifier);
      }

      // Handle player sprite movement
      if (moveLeft) {
        setPlayerPosition((prevPosition) =>
          prevPosition - HORIZONTAL_MOVE_SPEED >= LEFT_BOUND
            ? prevPosition - HORIZONTAL_MOVE_SPEED
            : LEFT_BOUND
        );
      } else if (moveRight) {
        const { width = 0 } =
          gameWindowRef.current?.getBoundingClientRect() || {};
        setPlayerPosition((prevPosition) =>
          prevPosition + HORIZONTAL_MOVE_SPEED <= width - SPRITE_OFFSET
            ? prevPosition + HORIZONTAL_MOVE_SPEED
            : width - SPRITE_OFFSET
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
          const newTop = (missile.top || 0) - VERTICAL_MOVE_SPEED * 8;
          // Did this missile fly out of bounds?
          if (
            newTop < 0 ||
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
          if (newTop > GAME_HEIGHT - 100) {
            loopHasLost = true;
            return acc;
          }

          if (
            invadersToRemove.some(
              (invaderToRemove) =>
                invaderToRemove.getAttribute("id") === invader.id
            )
          ) {
            delete movementDataByInvaderId[invader.id];
            return acc;
          }

          const newLeft = calculateMovement(
            invader.id,
            invader.left,
            gameBounds.width
          );

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
            left: generateRandomNumber(
              gameWindowRef.current?.getBoundingClientRect().width || 0
            ),
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
      clearInterval(gameLoop);
      clearInterval(reloadLoop);
    };
  }, [playing, hasLost, volumeOff]);

  useEffect(() => {
    const width = gameWindowRef.current?.getBoundingClientRect().width || 0;
    setPlayerPosition((width - SPRITE_OFFSET) / 2);
  }, [gameWindowRef]);

  const game = (
    <Stack
      sx={{
        height: GAME_HEIGHT,
        justifyContent: "space-between",
      }}
    >
      <TopRow playing={playing} setPlaying={setPlaying} />
      <Stack
        sx={{
          alignItems: "center",
          height: "100%",
          justifyContent: "center",
          position: "relative",
          overflow: "hidden",
        }}
        ref={gameWindowRef}
      >
        <Stack
          sx={{
            backgroundImage: `url("stars.gif")`,
            height: "100%",
            position: "absolute",
            width: "100%",
            opacity: 0.4,
          }}
        ></Stack>
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
                    ROUND SCORE: {roundScore}
                  </Typography>
                  <Typography fontWeight={700} variant="caption">
                    HIGH SCORE: {highScore}
                  </Typography>
                </Stack>
              </Alert>
            ) : null}
            {!isMobile ? (
              <Button
                sx={{
                  color: "#99CCFF",
                  width: "fit-content",
                  borderColor: "inherit",
                  ":hover": {
                    color: "rgba(190, 253, 200, 0.6)",
                    borderColor: "inherit",
                  },
                }}
                variant="outlined"
                onClick={() => {
                  if (hasLost) {
                    setRoundScore(0);
                  }

                  setHasLost(false);
                  setPlaying(true);
                }}
              >
                PLAY{hasLost ? " AGAIN" : ""}
              </Button>
            ) : (
              <Stack sx={{ width: "66%" }}>
                <Typography variant="body2" color="rgba(190, 253, 200, 1)">
                  To play Bug Invaders, visit this site on a desktop browser!
                </Typography>
              </Stack>
            )}
          </Stack>
        ) : null}
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
            color: "rgba(190, 253, 200, 1)",
            position: "absolute",
            bottom: INITIAL_TOP,
            left: playerPosition,
            fontSize: "28px",
            transform: "rotate(-45deg)",
          }}
        />
      </Stack>
      <BottomRow
        score={score}
        payload={payload}
        volumeOff={volumeOff}
        setVolumeOff={setVolumeOff}
      />
    </Stack>
  );

  return (
    <CollapsibleSection
      header={
        <Typography variant="h5" sx={{ color: "#99CCFF" }}>
          Bug Invaders
        </Typography>
      }
    >
      {game}
      <Stack spacing={2} sx={{ pt: 2 }}>
        <Typography variant="body2">
          <Highlight text="Bug Invaders" /> is a purely React reinvention of the
          classic Space Invaders game. I wrote it from scratch as a{" "}
          <Highlight text="challenge to myself" />. I wanted to see if I could
          make a "continous" game <Highlight text="performant" /> and handle{" "}
          <Highlight text="complicated state updates" /> with nothing but
          standard <Highlight text="React hooks" />. If you want to modify the{" "}
          <Highlight text="difficulty" />, all you have to do is{" "}
          <Highlight text="resize" />
          your window and reload the page. A wider window makes the game more
          difficult.
        </Typography>
      </Stack>
    </CollapsibleSection>
  );
};

export default SpaceInvaders;
