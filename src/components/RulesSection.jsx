export const RulesSection = () => {
  const rules = [
    "Be respectful, treat others with kindness and respect. Harassment, discrimination, hate speech or any form of offensive behaviour will not be tolerated",
    "You are allowed to stay in any one of the main groups and one casino. If you join both, you will be removed and will not be added back",
    "No other bots are allowed in any of the lunar groups",
    "Please refrain from sending any other group links, any type of promotional links and flooding the group",
    "Do not lend any of your items to anyone unless you are sure they won't exploit/misuse it. If any item is cloned, both the cloned item along with the original item used for cloning will be deleted. Please note that we will not be responsible for any of your loses",
    "Feel free to ask the mods or the experienced players for advice",
    "If you find any bugs, contact any mods and inform us about it so that we can fix them to improve your experience",
    "Cloning cards or exploiting bugs is strictly prohibited. If caught, you will be banned immediately"
  ];

  return (
    <section id="rules" className="py-24 px-4 relative bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Rules</span>
          </h2>
        </div>

        <div className="space-y-4">
          {rules.map((rule, index) => (
            <div key={index} className="text-white">
              <p className="text-lg leading-relaxed">
                『{rule}』
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
