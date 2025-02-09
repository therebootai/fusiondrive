export default function CustomHeading({ saffronText, darkText }) {
  return (
    <h1 className="text-lg md:text-2xl xl:text-4xl font-bold capitalize">
      <span className="text-site-primary">{saffronText}</span>&nbsp;
      <span className="text-site-secondary">{darkText}</span>
    </h1>
  );
}
