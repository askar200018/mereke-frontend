type Props = {
  breadcrumbs: string[];
};

const Breadcrumbs = ({ breadcrumbs }: Props) => {
  return (
    <ul className="flex space-x-2">
      {breadcrumbs.map((bread, i) => {
        if (i === breadcrumbs.length - 1) {
          return (
            <li key={bread} className="text-sm text-grey-text">
              {bread}
            </li>
          );
        }
        return (
          <li key={bread} className="flex space-x-2 text-sm text-grey-text">
            <span>{bread}</span>
            <span>•</span>
          </li>
        );
      })}
    </ul>
  );
};
export default Breadcrumbs;
