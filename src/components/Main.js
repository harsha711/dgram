import React, { Component } from "react";
import Identicon from "identicon.js";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = { modalOpen: false };
    this.state = { modalImage: "" };
  }
  handleModal = (img) => {
    this.setState({ modalImage: img });
    this.setState({ modalOpen: true });
  };
  render() {
    return (
      <div className="container-fluid mt-5">
        <div className="row">
          <main
            role="main"
            className="col-lg-12 ml-auto mr-auto"
            style={{ maxWidth: "800px" }}
          >
            <div className="content mr-auto ml-auto">
              <p>&nbsp;</p>
              <h2>Create a Post</h2>
              <form
                onSubmit={(event) => {
                  event.preventDefault();
                  const description = this.imageDescription.value;
                  this.props.uploadImage(description);
                }}
              >
                <input
                  id="imageDescription"
                  type="text"
                  ref={(input) => {
                    this.imageDescription = input;
                  }}
                  className="form-control"
                  placeholder="Write Your Post's Title"
                  required
                />
                <br />
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text">Upload</span>
                  </div>

                  <div className="custom-file">
                    <input
                      type="file"
                      accept=".jpg, .jpeg, .png, .bmp, .gif"
                      onChange={this.props.captureFile}
                      className="custom-file-input"
                    />
                    <label
                      className="custom-file-label"
                      htmlfor="inputGroupFile01"
                    >
                      Select a File
                    </label>
                  </div>
                </div>
                <div className="form-group mr-sm-2"></div>
                <button
                  type="submit"
                  className="btn btn-primary btn-block btn-lg"
                >
                  Create Post
                </button>
              </form>

              <p>&nbsp;</p>
              {this.props.images.map((image, key) => {
                return (
                  <>
                    <div className="card" style={{ margin: "20px" }}>
                      <img
                        style={{ cursor: "pointer" }}
                        onClick={() =>
                          this.handleModal(
                            `https://ipfs.infura.io/ipfs/${image.hash}`
                          )
                        }
                        className="card-img-top"
                        src={`https://ipfs.infura.io/ipfs/${image.hash}`}
                      />
                      <div className="card-body">
                        <img
                          alt="stfu"
                          className="mr-2"
                          width="30"
                          height="30"
                          style={{ marginBottom: "5px" }}
                          src={`data:image/png;base64,${new Identicon(
                            image.author,
                            30
                          ).toString()}`}
                        />
                        <small className="text-muted">{image.author}</small>

                        <h5 className="card-title">{image.description}</h5>
                        {/* <p class="card-text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium ad alias, aliquid amet aspernatur atque culpa cum debitis dicta doloremque, dolorum ea eos et excepturi explicabo facilis harum illo impedit incidunt laborum laudantium...
          </p> */}
                        <p className="card-text">
                          <small className="float-left mt-1 text-muted">
                            TIPS:{" "}
                            {window.web3.utils.fromWei(
                              image.tipAmount.toString(),
                              "Ether"
                            )}{" "}
                            ETH
                          </small>
                        </p>
                        <button
                          className="btn btn-link btn-sm float-right pt-0"
                          name={image.id}
                          disabled={
                            image.author === this.props.account ? true : false
                          }
                          onClick={(event) => {
                            let tipAmount = window.web3.utils.toWei(
                              "0.1",
                              "Ether"
                            );
                            console.log(event.target.name, tipAmount);
                            this.props.tipImageOwner(
                              event.target.name,
                              tipAmount
                            );
                          }}
                        >
                          TIP 0.1 ETH
                        </button>
                      </div>
                    </div>

                    {/* <div className="card mb-4" key={key}>
                      <div className="card-header">
                        <img
                          alt="stfu"
                          className="mr-2"
                          width="30"
                          height="30"
                          src={`data:image/png;base64,${new Identicon(
                            image.author,
                            30
                          ).toString()}`}
                        />
                        <small className="text-muted">{image.author}</small>
                      </div>
                      <ul
                        id="imageList"
                        className="list-group list-group-flush"
                      >
                        <li className="list-group-item">
                          <p className="text-center">
                            <img
                              alt="stfu2"
                              src={`https://ipfs.infura.io/ipfs/${image.hash}`}
                              style={{ maxWidth: "420px" }}
                            />
                          </p>
                          <p>{image.description}</p>
                        </li>
                        <li key={key} className="list-group-item py-2">
                          <small className="float-left mt-1 text-muted">
                            TIPS:{" "}
                            {window.web3.utils.fromWei(
                              image.tipAmount.toString(),
                              "Ether"
                            )}{" "}
                            ETH
                          </small>
                          <button
                            className="btn btn-link btn-sm float-right pt-0"
                            name={image.id}
                            onClick={(event) => {
                              let tipAmount = window.web3.utils.toWei(
                                "0.1",
                                "Ether"
                              );
                              console.log(event.target.name, tipAmount);
                              this.props.tipImageOwner(
                                event.target.name,
                                tipAmount
                              );
                            }}
                          >
                            TIP 0.1 ETH
                          </button>
                        </li>
                      </ul>
                    </div> */}
                  </>
                );
              })}
            </div>
          </main>
        </div>
      </div>
    );
  }
}

export default Main;
