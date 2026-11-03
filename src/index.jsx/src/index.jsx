import React from "react";
import {
  AbsoluteFill,
  Composition,
  useCurrentFrame,
  interpolate,
  spring,
  useVideoConfig,
  registerRoot
} from "remotion";

const GhazwaAd = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const reveal = spring({
    frame,
    fps,
    config: { damping: 18 }
  });

  const opacity = interpolate(
    frame,
    [0, 20, 50, 90, 120],
    [0, 1, 1, 1, 0.8],
    { extrapolateRight: "clamp" }
  );

  const scale = interpolate(
    frame,
    [0, 120],
    [1.15, 1]
  );

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#080808",
        color: "white",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Arial",
        overflow: "hidden"
      }}
    >
      <AbsoluteFill
        style={{
          background:
            "radial-gradient(ellipse, #292020 0%, #080808 70%)",
          transform: `scale(${scale})`
        }}
      />

      <div style={{
        position: "absolute",
        width: 500,
        height: 500,
        border: "1px solid #ffffff20",
        borderRadius: "50%",
        transform: `scale(${reveal})`
      }}/>

      <div style={{
        opacity,
        transform: `translateY(${(1-reveal)*80}px)`,
        textAlign: "center"
      }}>
        <div style={{
          fontSize: 105,
          fontWeight: 800,
          letterSpacing: 18
        }}>
          GHAZWA
        </div>

        <div style={{
          width: 130,
          height: 2,
          background: "#c9a66b",
          margin: "35px auto"
        }}/>

        <div style={{
          fontSize: 24,
          letterSpacing: 9,
          color: "#c9a66b"
        }}>
          BEYOND ORDINARY
        </div>
      </div>

      <div style={{
        position: "absolute",
        bottom: 100,
        fontSize: 19,
        letterSpacing: 5,
        color: "#888"
      }}>
        CREATED TO STAND OUT
      </div>
    </AbsoluteFill>
  );
};

const Root = () => (
  <Composition
    id="GhazwaAd"
    component={GhazwaAd}
    durationInFrames={120}
    fps={30}
    width={1080}
    height={1920}
  />
);

registerRoot(Root);
