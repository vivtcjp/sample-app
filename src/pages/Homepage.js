import React, { useState } from 'react';\nimport axios from 'axios';\n\nconst Homepage = () => {\n  const [origin, setOrigin] = useState('');\n  const [destination, setDestination] = useState('');\n  const [weekday, setWeekday] = useState('');\n\n  const handleSearch = async () => {\n    try {\n      const response = await axios.get(`/search?origin=${origin}&destination=${destination}&weekday=${weekday}`);\n      console.log(response.data);\n    } catch (error) {\n      console.error('Error fetching bus routes:', error);\n    }\n  };\n\n  return (\n    <div>\n      <h1>Search Bus Routes</h1>\n      <form>\n        <label>\n          Origin:\n          <input type=\"text\" value={origin} onChange={(e) => setOrigin(e.target.value)} />\n        </label>\n        <label>\n          Destination:\n          <input type=\"text\" value={destination} onChange={(e) => setDestination(e.target.value)} />\n        </label>\n        <label>\n          Weekday:\n          <input type=\"text\" value={weekday} onChange={(e) => setWeekday(e.target.value)} />\n        </label>\n        <button type=\"button\" onClick={handleSearch}>Search</button>\n      </form>\n    </div>\n  );\n};\n\nexport default Homepage;\n