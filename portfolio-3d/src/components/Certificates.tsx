export default function Certificates() {
  const certificates = [
    { id: 1, name: "Cyber Security Fundamentals", image: "../assets/certification/1.png" },
    { id: 2, name: "Web Development Certificate", image: "../assets/certification/2.png" },
    { id: 3, name: "Database Management Systems", image: "../assets/certification/3.png" },
    { id: 4, name: "Ethical Hacking / Security Basics", image: "../assets/certification/4.png" },
    { id: 5, name: "Network Security", image: "../assets/certification/5.png" },
    { id: 6, name: "Cloud Security", image: "../assets/certification/6.png" }
  ];

  return (
    <div className="flex flex-col gap-8 w-full max-w-[700px] mx-auto">
      {certificates.map((certificate) => (
        <div key={certificate.id} className="rounded-xl shadow-md overflow-hidden">
          <img 
            src={certificate.image} 
            alt={certificate.name}
            className="w-full h-64 object-cover"
          />
          <div className="p-4 text-center">
            <h4 className="font-semibold text-gray-800">{certificate.name}</h4>
            <p className="text-sm text-gray-600 mt-1">Online Certification</p>
          </div>
        </div>
      ))}
    </div>
  );
}