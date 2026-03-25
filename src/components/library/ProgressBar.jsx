import { useEffect, useState } from "react"

const levels = ["w-18", "w-30", "w-42", "w-56", "w-68", "w-82", "w-94"]

function ProgressBar() {
  const [levelIndex, setLevelIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setLevelIndex((prev) => (prev === levels.length - 1 ? 0 : prev + 1))
    }, 420)

    return () => clearInterval(timer)
  }, [])

  const progressLabel = levels[levelIndex].replace("w-", "")

  return (
    <div className="lib-card lib-progress" aria-label="Progress bar preview">
      <div className="lib-progress-track">
        <span className={`lib-progress-fill ${levels[levelIndex]}`} />
      </div>
      <p className="lib-caption">{progressLabel}% synced</p>
    </div>
  )
}

export default ProgressBar
