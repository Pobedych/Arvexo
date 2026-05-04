import { Icon } from "@/components/Icons";

type DetailListProps = {
  items: string[];
  columns?: "one" | "two";
};

export function DetailList({ columns = "two", items }: DetailListProps) {
  return (
    <ul className={`detail-list detail-list-${columns}`}>
      {items.map((item) => (
        <li key={item}>
          <Icon name="check" className="h-4 w-4" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
