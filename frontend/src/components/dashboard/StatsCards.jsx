export default function StatsCards() {
  const stats = [
    {
      title: "Patients",
      value: "12",
      icon: "👤",
      color: "bg-blue-500",
    },
    {
      title: "Consultations",
      value: "34",
      icon: "📋",
      color: "bg-green-500",
    },
    {
      title: "Doctors",
      value: "4",
      icon: "👨‍⚕️",
      color: "bg-purple-500",
    },
    {
      title: "Today's Visits",
      value: "5",
      icon: "🕒",
      color: "bg-orange-500",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition duration-300"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">{stat.title}</p>

              <h2 className="text-3xl font-bold mt-2">
                {stat.value}
              </h2>
            </div>

            <div
              className={`${stat.color} text-white text-3xl p-4 rounded-xl`}
            >
              {stat.icon}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}