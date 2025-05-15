import React from 'react'

const timeline = [
  { year: '2022', description: 'Started learning programming languages' },
  { year: '2023', description: 'Began web development and built projects' },
  { year: '2024', description: 'Learning React, Node.js, Spring Boot, and databases' },
];
const ExperienceMiddle = () => {
  return (
    <div className="mt-6 space-y-6 border-l-4 border-orange pl-6">
      {timeline.map((item, index) => (
        <div key={index} className="relative">
          <div className="absolute -left-3 top-1 w-3 h-3 bg-orange rounded-full"></div>
          <h4 className="font-bold text-lightBrown">{item.year}</h4>
          <p className="text-sm text-gray-700">{item.description}</p>
        </div>
      ))}
    </div>
  )
}

export default ExperienceMiddle
