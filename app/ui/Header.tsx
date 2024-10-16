import { GitHub, LinkedIn, QrCode } from "@mui/icons-material";
import { Avatar, Box, Link, Modal, Stack, Typography } from "@mui/material";
import { useState } from "react";
import QRCodeReact from "qrcode.react";
import { THEME } from "../lib/theme";

export default function Header() {
  const [showQRCode, setShowQRCode] = useState(false);

  return (
    <>
      <Stack
        sx={{
          position: "fixed",
          mx: "auto",
          pointerEvents: "none",
          height: 132,
          maxWidth: 1200,
          backgroundColor: THEME.WHITE,
          width: "calc(100% - 32px)",
          top: 0,
          zIndex: 1200,
        }}
      />
      <Stack
        sx={{
          mx: "auto",
          pointerEvents: "none",
          height: 132,
          maxWidth: 1166,
        }}
      />
      <Stack
        direction="row"
        sx={{
          position: "fixed",
          mx: "auto",
          maxWidth: 1166,
          width: {
            xs: "calc(100% - 66px)",
          },
          alignItems: "center",
          backgroundColor: THEME.WHITE,
          justifyContent: "space-between",
          borderRadius: 2,
          border: `2px solid ${THEME.SECONDARY}`,
          p: 2,
          zIndex: 1200,
        }}
        spacing={1}
      >
        <Stack
          direction="row"
          spacing={2}
          sx={{ alignItems: "center", justifyContent: "center" }}
        >
          <Avatar
            sx={{
              width: 84,
              height: 84,
              border: `2px solid ${THEME.SECONDARY}`,
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="./matt_williamson.jpg" width={84} alt="matt headshot" />
          </Avatar>
          <Stack>
            <Typography
              fontWeight={700}
              sx={{ color: THEME.SECONDARY }}
              variant="h6"
            >
              Matthew Williamson
            </Typography>
            <Typography variant="body2" sx={{ color: THEME.SECONDARY }}>
              Senior Software Engineer
            </Typography>
            <Typography variant="caption">Scottsdale, AZ</Typography>
          </Stack>
        </Stack>
        <Stack sx={{ alignItems: "center" }} spacing={0.5}>
          <Link
            variant="caption"
            sx={{
              color: THEME.PRIMARY_FULL,
              cursor: "pointer",
              ":hover": { color: THEME.SECONDARY },
              display: "flex",
            }}
            href="https://www.linkedin.com/in/matthew-williamson-a63a88121/"
            target="_blank"
          >
            <LinkedIn sx={{ fontSize: 32 }} />
          </Link>
          <Link
            variant="caption"
            sx={{
              color: THEME.PRIMARY_FULL,
              cursor: "pointer",
              ":hover": { color: THEME.SECONDARY },
              display: "flex",
            }}
            href="https://github.com/matthew-williamson"
            target="_blank"
          >
            <GitHub sx={{ fontSize: 28 }} />
          </Link>
          <QrCode
            sx={{
              fontSize: 30,
              cursor: "pointer",
              color: THEME.PRIMARY_FULL,
              ":hover": { color: THEME.SECONDARY },
            }}
            onClick={() => setShowQRCode(true)}
          />
        </Stack>
        {showQRCode ? (
          <Modal open={showQRCode} onClose={() => setShowQRCode(false)}>
            <Stack
              sx={{
                height: "100vh",
                width: "100%",
                justifyContent: "center",
                alignItems: "center",
              }}
              onClick={() => setShowQRCode(false)}
            >
              <Stack
                sx={{
                  p: 4,
                  backgroundColor: THEME.WHITE,
                  borderRadius: "8px",
                }}
              >
                <QRCodeReact
                  size={250}
                  value="https://matt-williamson.netlify.app"
                />
              </Stack>
            </Stack>
          </Modal>
        ) : null}
      </Stack>
    </>
  );
}
