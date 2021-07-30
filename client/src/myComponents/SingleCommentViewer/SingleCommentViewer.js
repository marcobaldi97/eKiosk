import React from "react";
import { Card } from "react-bootstrap";

/***
 * Type: Dumb component.
 * Params: question, author, authorImg, response, ableToResponse (false if the poster is viewing this product).
 */
class SingleCommentViewer extends React.Component {
	render() {
		return (
			<div className="SingleCommentViewer">
				<Card className="SingleCommentViewer">
					<Card.Body>
						<Card.Title>
							<img src="https://www.w3schools.com/howto/img_avatar.png" className="Avatar" />
							{this.props.question}
						</Card.Title>
						<Card.Subtitle className="mb-2 text-muted">{this.props.author}</Card.Subtitle>
						<Card.Text>{this.props.response}</Card.Text>
						<Card.Link disabled={this.props.ableToResponse}>Response</Card.Link>
					</Card.Body>
				</Card>
			</div>
		);
	}
}
export default SingleCommentViewer;
