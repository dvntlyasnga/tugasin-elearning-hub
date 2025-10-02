import Navbar from "@/components/Navbar";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="flex items-center justify-center min-h-[calc(100vh-80px)]">
        <h1 className="text-5xl md:text-6xl font-bold text-foreground uppercase tracking-wider">
          No Course Added
        </h1>
      </main>
    </div>
  );
};

export default Dashboard;
