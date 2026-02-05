import { RightArrow } from "@/public/icons";
import Container from "./container";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadCrumbProps {
  items: BreadcrumbItem[];
}

export default function BreadCrumb({ items }: BreadCrumbProps) {
  return (
    <Container>
      <div className="breadcrumb px-8 py-4 bg-gray-darker text-black flex items-center text-xs lg:text-base rounded-2xl mt-4">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <div key={index} className="flex items-center">
              {item.href && !isLast ? (
                <a href={item.href} className="hover:underline">
                  {item.label}
                </a>
              ) : (
                <span className={isLast ? "text-text-dim" : ""}>
                  {item.label}
                </span>
              )}
              {!isLast && <RightArrow width={24} height={24} />}
            </div>
          );
        })}
      </div>
    </Container>
  );
}