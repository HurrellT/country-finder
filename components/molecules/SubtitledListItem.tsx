import Subtitle from "components/atoms/Subtitle";

const SubtitledListItem = ({
  itemText,
  subtitleText,
}: {
  itemText: String;
  subtitleText: String;
}) => (
  <div>
    <Subtitle text={subtitleText} />
    <p className="text-sm font-medium text-gray-900">{itemText}</p>
  </div>
);

export default SubtitledListItem;
