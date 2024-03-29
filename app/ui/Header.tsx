import { GitHub, LinkedIn, QrCode } from "@mui/icons-material";
import { Avatar, Box, Link, Modal, Stack, Typography } from "@mui/material";
import { useState } from "react";
import QRCodeReact from "qrcode.react";

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
          width: "calc(100% - 32px)",
          backgroundColor: "#262626",
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
          backgroundColor: "#1A1A1A",
          justifyContent: "space-between",
          borderRadius: 2,
          border: "1px solid rgba(255, 255, 255, 0.12)",
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
              border: "1px solid #99CCFF",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="./matt_williamson.jpg" width={84} alt="matt headshot" />
          </Avatar>
          <Stack>
            <Typography fontWeight={700} sx={{ color: "#99CCFF" }}>
              Matthew Williamson
            </Typography>
            <Typography variant="body2" color="rgba(190, 253, 200, 0.75)">
              Senior Software Engineer
            </Typography>
            <Typography variant="caption">Scottsdale, AZ</Typography>
          </Stack>
        </Stack>
        <Stack sx={{ alignItems: "center" }} spacing={0.5}>
          <Link
            variant="caption"
            sx={{
              color: "#99CCFF",
              cursor: "pointer",
              ":hover": { color: "rgba(190, 253, 200, 0.6)" },
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
              color: "#99CCFF",
              cursor: "pointer",
              ":hover": { color: "rgba(190, 253, 200, 0.6)" },
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
              color: "#99CCFF",
              ":hover": { color: "rgba(190, 253, 200, 0.6)" },
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
                  backgroundColor: "rgba(26, 26, 26, 0.9)",
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
