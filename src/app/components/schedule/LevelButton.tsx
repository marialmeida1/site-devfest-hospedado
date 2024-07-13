export default function levelButton({level} : {level: string}) {

    let color: string;

    if(level == "Iniciante"){
        color = "bg-green";
    } else if(level == "Intermediário"){
        color = "bg-yellow"
    } else if(level == "Avançado"){
        color = "bg-red"
    } else {
        color = "bg-blue"
    }

  return (
    <div className={`${color} w-fit rounded-full text-white px-2 py-0.5 text-xs`}>
      {level}
    </div>
  );
}