import Card from "./Card/Card";
import "./Column.css";
import Title from "./Title/Title";

export default function Column({
  title,
  cards,
  icon,
  isName,
  isStatus,
  isAvailable,
}) {
  return (
    <div className="column">
      <Title
        title={title}
        isName={isName}
        icon={icon}
        length={cards?.length || 0}
        isAvailable={isAvailable}
      />
      {cards.map((data) => (
        <Card key={data.id} {...data} isStatus={isStatus} isName={isName}/>
      ))}
    </div>
  );
}
