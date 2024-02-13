import React from 'react'

interface TagsProps {
  labels: string[]
}
export const Tags = ({ labels }: TagsProps) => {
  if (!labels.length) return <></>
  return (
    <div className="mt-4 flex flex-wrap gap-2">
      {labels.map((label, index) => (
        <span
          key={`${label.toLowerCase()}-${index}`}
          className="w-fit rounded-2xl bg-accentColorLight px-4 py-1 text-xs text-accentColor"
        >
          {label}
        </span>
      ))}
    </div>
  )
}
