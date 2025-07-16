import { Plane, Home, Building, Heart, DollarSign } from "lucide-react";

const TargetUsersSection = () => {
  const userTypes = [
    {
      icon: Plane,
      title: "Travelers",
      description: "Forgot something at the hotel? Need someone to check your rental property? We'll handle it remotely.",
      examples: ["Item retrieval", "Property checks", "Last-minute errands"],
      color: "bg-blue-500",
    },
    {
      icon: Home,
      title: "Remote Homeowners",
      description: "Get maintenance supervised, installations verified, or urgent repairs handled while you're away.",
      examples: ["Home supervision", "Contractor oversight", "Emergency fixes"],
      color: "bg-green-500",
    },
    {
      icon: Building,
      title: "Startups & Businesses",
      description: "Need onsite installations, equipment setup, or office tasks completed in different cities?",
      examples: ["Equipment setup", "Office tasks", "Site visits"],
      color: "bg-purple-500",
    },
    {
      icon: Heart,
      title: "Busy Professionals",
      description: "Elderly care visits, grocery pickup, or handling administrative tasks when time is limited.",
      examples: ["Elder care checks", "Administrative tasks", "Personal errands"],
      color: "bg-pink-500",
    },
    {
      icon: DollarSign,
      title: "Local Earners",
      description: "Turn your free time into income by helping others with tasks in your neighborhood.",
      examples: ["Flexible income", "Skill monetization", "Community help"],
      color: "bg-primary",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-secondary mb-4">
            Who Uses <span className="text-primary">Extrahand</span>?
          </h2>
          <p className="text-xl text-text-light max-w-3xl mx-auto">
            From busy professionals to local earners, Extrahand serves diverse communities 
            with one common need: getting things done efficiently, wherever they are.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {userTypes.map((user, index) => (
            <div 
              key={index}
              className="bg-gradient-subtle rounded-xl p-6 border border-light-gray hover:shadow-card transition-all duration-300 group hover:-translate-y-1"
            >
              <div className={`${user.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <user.icon className="w-6 h-6 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-secondary mb-3 group-hover:text-primary transition-colors duration-300">
                {user.title}
              </h3>
              
              <p className="text-text-light leading-relaxed mb-4">
                {user.description}
              </p>
              
              <div className="space-y-2">
                <p className="text-sm font-medium text-secondary">Common tasks:</p>
                <div className="flex flex-wrap gap-2">
                  {user.examples.map((example, idx) => (
                    <span 
                      key={idx}
                      className="text-xs bg-white px-3 py-1 rounded-full text-text-light border border-light-gray"
                    >
                      {example}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action for different user types */}
        <div className="mt-16 grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-hero rounded-xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Need Help with a Task?</h3>
            <p className="mb-6 text-white/90">
              Post your task in minutes and get matched with trusted local helpers.
            </p>
            <button className="bg-white text-primary font-semibold px-6 py-3 rounded-lg hover:bg-white/90 transition-colors duration-300">
              Post a Task
            </button>
          </div>
          
          <div className="bg-gradient-trust rounded-xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Want to Earn Money?</h3>
            <p className="mb-6 text-white/90">
              Join our network of task performers and start earning in your spare time.
            </p>
            <button className="bg-primary text-white font-semibold px-6 py-3 rounded-lg hover:bg-primary-dark transition-colors duration-300">
              Become a Tasker
            </button>
          </div>
        </div>

        {/* Success stories preview */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-secondary mb-8">Real Stories from Real Users</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                quote: "Saved me a 6-hour drive to pick up documents. Worth every penny!",
                author: "Sarah M., Business Owner",
                task: "Document retrieval",
              },
              {
                quote: "My elderly father got the help he needed while I was traveling.",
                author: "Mike R., Frequent Traveler",
                task: "Elder care check",
              },
              {
                quote: "Made $200 last week helping neighbors with their tasks.",
                author: "Alex T., Local Tasker",
                task: "Multiple tasks",
              },
            ].map((story, index) => (
              <div key={index} className="bg-light-gray rounded-lg p-6">
                <p className="text-text-light italic mb-4">"{story.quote}"</p>
                <div className="text-sm">
                  <p className="font-semibold text-secondary">{story.author}</p>
                  <p className="text-text-light">{story.task}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TargetUsersSection;