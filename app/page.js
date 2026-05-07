export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black flex flex-col items-center justify-center p-8">
      <div className="max-w-2xl w-full border-2 border-black p-12 space-y-6">
        <div className="space-y-2">
          <h1 className="text-6xl font-bold tracking-tighter uppercase">Git Demo Session</h1>
          <p className="text-xl font-medium text-gray-500">Initial State: Boring but functional.</p>
        </div>
        
        <div className="h-px bg-black w-full" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="border border-black p-6 hover:bg-black hover:text-white transition-colors cursor-pointer">
            <h2 className="font-bold text-2xl mb-2">Branching</h2>
            <p className="text-sm opacity-70">Learn how to work in isolation without breaking the main code.</p>
          </div>
          
          <div className="border border-black p-6 hover:bg-black hover:text-white transition-colors cursor-pointer">
            <h2 className="font-bold text-2xl mb-2">Conflicts</h2>
            <p className="text-sm opacity-70">Learn how to resolve the inevitable clash of codes.</p>
          </div>
        </div>

        <div className="pt-8">
          <button className="bg-black text-white px-8 py-4 font-bold uppercase tracking-widest hover:invert transition-all">
            Start Learning
          </button>
        </div>
      </div>
      
      <p className="mt-8 text-sm font-mono opacity-50 uppercase">
        Ready for Git Magic. Let's make some commits.
      </p>
    </main>
  );
}
