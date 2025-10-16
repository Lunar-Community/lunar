export const HowToAddBotSection = () => {
  const requirements = [
    "Make sure it's a link not an expiring invite",
    "Send the group link to any of the active bot's dm (The bot may not join right away, it might take some time)",
    "Group should have admin approval for new participants turned off",
    "Group should have a minimum of 30 members",
    "Won't be adding bots to groups that have been recently created and are primarily focused on farming cards",
    "Bots will not be added in groups where the users are the same as those in previously added groups"
  ];

  return (
    <section id="how-to-add-bot" className="py-24 px-4 relative bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            How to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Add Bot</span>
          </h2>
        </div>

        <div className="space-y-4">
          {requirements.map((requirement, index) => (
            <div key={index} className="text-white">
              <p className="text-lg leading-relaxed">
                『{requirement}』
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
