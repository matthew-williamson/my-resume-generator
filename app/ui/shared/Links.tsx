import { GitHub, LinkedIn, QrCode } from "@mui/icons-material";
import { Avatar, Box, Link, Modal, Stack, Typography } from "@mui/material";
import { useState } from "react";
import QRCodeReact from "qrcode.react";
import { THEME } from "../../lib/theme";

export const Links = () => {
  const [showQRCode, setShowQRCode] = useState(false);
  return (
    <Stack sx={{ alignItems: "center" }} spacing={0.5}>
      <Link
        variant="caption"
        sx={{
          color: THEME.WHITE,
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
          color: THEME.WHITE,
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
          color: THEME.WHITE,
          ":hover": { color: THEME.SECONDARY },
        }}
        onClick={() => setShowQRCode(true)}
      />
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
                backgroundColor: THEME.BACKGROUND,
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
  );
};
