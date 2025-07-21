const TestimonialCard = ({ clientName, designation, clientReview, clientImg }) => {
    return (
        <div className="bg-(--bg-second-col) rounded-3xl p-6 lg:px-8 lg:py-16 min-h-[240px] max-w-[300px] md:max-w-[382px] lg:h-[324px] text-center w-full h-full block singleCard shine-card-overlay">
            <div className="flex flex-col justify-between h-full gap-4">
                <p className="text-white text-left text-sm font-inter-thin min-h-[62px] max-h-full overflow-y-auto">{clientReview}</p>

                <div className="flex items-center rounded-t border-t-1 border-gray-400 pt-4 ">
                    <img className="w-10 h-10 md:w-12 md:h-12 rounded-full mr-4" src={clientImg} alt={clientName} />
                    <div className="text-left">
                        <p className="text-white leading-none font-inter-medium text-sm md:text-base mb-1">{clientName}</p>
                        <p className="text-white font-inter-thin text-xs md:text-sm">{designation}</p>
                    </div>
                </div>
            </div>
            <div className="shine-card"></div>
        </div>
    );
};

export default TestimonialCard;
