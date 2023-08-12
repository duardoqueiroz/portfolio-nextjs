interface ISkillsPillProps {
  item: {
    id: string;
    name: string;
    icon: string;
  };
}

const SkillPill = (props: ISkillsPillProps) => {
  const { item } = props;

  return (
    <div key={item.id} className="relative w-24 rounded p-3 hover:bg-gray-100">
      <img
        src={item.icon}
        className="w-12 h-12 mx-auto mb-2 animate-pulse"
        alt={item.name}
        loading="lazy"
      />
      <h2 className="text-xs lg:text-sm font-spartanSemiBold text-pw-blue text-center max-w-[8rem]">
        {item.name}
      </h2>
    </div>
  );
};

export default SkillPill;
