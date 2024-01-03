function App() {

  return (
    <div className="bg-slate-700 text-slate-100 pt-20 min-h-screen">
      <div className="max-w-xl mx-auto border border-slate-500 rounded p-10">
        <h1 className="text-center text-3xl mb-8">Promodoro maison</h1>
        <div className="flex justify-center mb-8">
          
          {/* Session*/}
          <div className="mr-10">
            <p className="text-center mb-1">Sessions</p>
              <div className="flex">
                <p className="mx-4 text-xl">25</p>

              </div>
          </div>
          
          {/* Pause*/}
          <div>
            <p className="text-center mb-1">Pauses</p>
              <div className="flex">
                <p className="mx-4 text-xl">5</p>

              </div>
          </div>
        
        </div>

        {/* Timer */}

        <p className="text-center mb-2 text-xl font-semibold">
          Timer
        </p>

        <p className="text-center flex justify-center mb-1">
          <span className="text-4xl p-4 rounded bg-slate-300 text-slate-900">
            30:00
          </span>
        </p>

        <p className="mb-10 text-center">
          Cycles effectué(s) : 0
        </p>

      </div>
    </div>
  )
}

export default App
