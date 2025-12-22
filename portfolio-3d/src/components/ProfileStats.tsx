export default function ProfileStats() {
  const profileStatsImages = [
    { src: "../assets/profile/leetcode.png", alt: "LeetCode Stats" },
    { src: "../assets/profile/picoctf.png", alt: "PicoCTF Stats" },
    { src: "../assets/profile/Screenshot 2025-12-21 154314.png", alt: "Profile Stats" },
    { src: "../assets/profile/leetcodeprob.png", alt: "LeetCode Problems" }
  ];

  return (
    <div className="mt-8">
      <h3 className="text-xl font-semibold mb-6">
        Platform Stats
      </h3>

      <div className="flex flex-col gap-6">
        {profileStatsImages.map((img, index) => (
          <img
            key={index}
            src={img.src}
            alt={img.alt}
            className="
              w-full
              max-w-[700px]
              mx-auto
              rounded-xl
              shadow-md
            "
          />
        ))}
      </div>
    </div>
  );
}