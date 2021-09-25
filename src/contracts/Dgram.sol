pragma solidity >=0.5.0 <0.9.0;

contract Dgram {
    string public name = "Dgram";

    mapping(uint256 => Image) public images;
    uint256 public imageCount = 0;

    //Store image

    struct Image {
        uint256 id;
        string hash;
        string description;
        uint256 tipAmount;
        address payable author;
    }

    event ImageCreated(
        uint256 id,
        string hash,
        string description,
        uint256 tipAmount,
        address payable author
    );

    event ImageTipped(
        uint256 id,
        string hash,
        string description,
        uint256 tipAmount,
        address payable author
    );

    //Create images

    function uploadImage(string memory _imgHash, string memory _description)
        public
    {
        require(bytes(_description).length > 0);
        require(bytes(_imgHash).length > 0);
        require(msg.sender != address(0x0));

        imageCount++;
        //Adding image to contract
        images[imageCount] = Image(
            imageCount,
            _imgHash,
            _description,
            0,
            msg.sender
        );

        //Trigger event
        emit ImageCreated(imageCount, _imgHash, _description, 0, msg.sender);
    }

    //tip posts
    function tipImageOwner(uint256 _id) public payable {
        require(_id > 0 && _id <= imageCount);

        Image memory _image = images[_id];

        address payable _author = _image.author;

        _author.transfer(msg.value);

        _image.tipAmount = _image.tipAmount + msg.value;

        images[_id] = _image;

        emit ImageTipped(
            _id,
            _image.hash,
            _image.description,
            _image.tipAmount,
            _author
        );
    }
}
