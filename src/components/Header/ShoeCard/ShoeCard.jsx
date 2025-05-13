
function ShoeCard({ imgUrl, changeImage, bigShoeImg }) {

    const handleClick = () => {
        if(bigShoeImg === imgUrl.thumbnail) return;
        changeImage();
    }

    return (
        <div
            onClick={handleClick}
            className={`flex justify-center items-center bg-white rounded-xl cursor-pointer border-2 
                ${bigShoeImg === imgUrl.thumbnail ? "border-red-400" : "border-transparent"}`}>
            <img
                src={imgUrl.thumbnail}
                alt="Shoe Thumbnail"
                width={127}
                height={103}
                className="object-contain"
            />
        </div>
    );
}


export default ShoeCard;