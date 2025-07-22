const SingleCard = ({ image, title, description }) => {
  return (
    <div className="bg-(--bg-second-col) rounded-3xl p-4 lg:px-8 lg:py-16 min-h-[240px] lg:h-[324px] text-center w-full h-full block singleCard shine-card-overlay shadow-[-1px_1px_2px_rgba(255,255,255,0.4)_inset]">
      <img src={image} alt={title} className="mb-4 w-[58px] h-auto object-contain" />
      <h3 className="text-white text-base font-inter-semibold text-left mb-[18px]">{title}</h3>
      <p className="text-white text-left text-sm font-inter-thin">{description}</p>
      <div className="shine-card"></div>
    </div>
  );
};

export default SingleCard;
