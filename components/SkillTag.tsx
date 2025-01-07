type SkillTagProps = {
  skill: string;
};

export function SkillTag({ skill }: SkillTagProps) {
  return (
    <span className="inline-block bg-primary text-white text-xs px-2 py-1 rounded-full mr-2 mb-2">
      {skill}
    </span>
  );
}

