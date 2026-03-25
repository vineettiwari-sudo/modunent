export default function Loader({ size = 28 }) {
  return (
    <div
      style={{
        width: size,
        height: size,
        border: "3px solid rgba(255,255,255,0.15)",
        borderTop: "3px solid #4f8cff",
        borderRadius: "50%",
        animation: "spin 0.8s linear infinite",
      }}
    />
  )
}
