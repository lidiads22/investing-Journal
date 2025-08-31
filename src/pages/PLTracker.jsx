import { useState } from 'react'
import { Calendar, dateFnsLocalizer } from 'react-big-calendar'
import format from 'date-fns/format'
import parse from 'date-fns/parse'
import startOfWeek from 'date-fns/startOfWeek'
import getDay from 'date-fns/getDay'
import enUS from 'date-fns/locale/en-US'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import '../css/calendarOverrides.css'

const locales = {
  'en-US': enUS,
}

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
})

export default function PLTracker() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const [events, setEvents] = useState([
    {
      title: 'Sold $TSLA +$600',
      start: new Date(2024, 5, 10),
      end: new Date(2024, 5, 10),
      profit: true,
    },
    {
      title: 'Lost on $AAPL -$300',
      start: new Date(2024, 5, 13),
      end: new Date(2024, 5, 13),
      profit: false,
    },
  ])

  const [formData, setFormData] = useState({
    title: '',
    date: '',
    amount: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

const handleAddEvent = (e) => {
  e.preventDefault()

  const { title, date, amount } = formData
  const amountNum = parseFloat(amount)

  if (!title || !date || isNaN(amountNum)) return

  const newEvent = {
    title: `${title} ${amountNum > 0 ? '+' : ''}$${Math.abs(amountNum)}`,
    start: new Date(date),
    end: new Date(date),
    profit: amountNum > 0,
  }

  setEvents([...events, newEvent])
  setFormData({ title: '', date: '', amount: '' })
}


  return (
    <div className="flex h-screen overflow-hidden">
    

        <main className="grow">
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
            <div className="p-2 bg-white dark:bg-slate-800 shadow-md rounded-md mb-4">
              <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
                Add Trade
              </h2>
              <form onSubmit={handleAddEvent} className="space-y-4 md:flex md:items-end md:space-y-0 md:space-x-4">
  <input
    type="text"
    name="title"
    placeholder="Title"
    value={formData.title}
    onChange={handleChange}
    className="p-2 rounded border border-gray-300 dark:bg-slate-700 dark:text-white w-full md:w-1/4"
    required
  />
  <input
    type="date"
    name="date"
    value={formData.date}
    onChange={handleChange}
    className="p-2 rounded border border-gray-300 dark:bg-slate-700 dark:text-white w-full md:w-1/4"
    required
  />
  <input
    type="number"
    name="amount"
    placeholder="Amount"
    value={formData.amount}
    onChange={handleChange}
    className="p-2 rounded border border-gray-300 dark:bg-slate-700 dark:text-white w-full md:w-1/4"
    required
  />
  <button
    type="submit"
    className="px-4 py-2 bg-violet-500 text-white rounded hover:bg-violet-600 w-full md:w-auto"
  >
    Add
  </button>
</form>
            </div>
            <div className="p-4 bg-white dark:bg-slate-800 shadow-lg rounded-lg">
              <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
                Profit & Loss Calendar
              </h2>
              <Calendar
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
                style={{ height: 600 }}
                eventPropGetter={(event) => ({
                  style: {
                    backgroundColor: event.profit ? '#22c55e' : '#ef4444',
                    color: '#000',
                    border: 'none',
                    borderRadius: '4px',
                  },
                })}
              />
            </div>
          </div>
        </main>
      </div>
  )
}