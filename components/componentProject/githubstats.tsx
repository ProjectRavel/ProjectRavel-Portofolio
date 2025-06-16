import GitHubCalendar from "react-github-calendar";

export default function GithubStats() {
  return (
    <div className="relative z-10 mb-16 w-full my-24 overflow-x-auto max-w-6xl">
      <h2 className="text-2xl font-semibold text-[var(--secondary-foreground)] mb-4">
        GitHub Contributions:
      </h2>
      <div className="flex justify-center">
        <GitHubCalendar
          username="projectravel"
          blockSize={15}
          blockMargin={5}
          fontSize={16}
        />
      </div>
    </div>
  );
}
