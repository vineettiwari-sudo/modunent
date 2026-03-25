import { motion } from "framer-motion"
import { SearchX } from "lucide-react"
import { cn } from "../../utils"

export interface NoResultsStateProps {
  message?: string
  className?: string
}

export function NoResultsState({
  message = "No Results",
  className,
}: NoResultsStateProps) {
  return (
    <motion.div
      className={cn(
        "flex flex-col items-center justify-center py-12 px-4 text-center",
        className
      )}
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.2 }}
        className="rounded-full bg-muted p-4 mb-4"
      >
        <SearchX className="h-8 w-8 text-muted-foreground" />
      </motion.div>
      <p className="text-lg font-medium text-foreground">{message}</p>
      <p className="mt-1 text-sm text-muted-foreground">
        Try adjusting your filters or search terms.
      </p>
    </motion.div>
  )
}
