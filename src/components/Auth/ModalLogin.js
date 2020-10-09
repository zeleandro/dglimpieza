import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import '../style/modal.css';


function ModalLogin(props) {
	if (!props.modalIsOpen) {
		return null;
	}
	return ReactDOM.createPortal(
		<div className="Modal">
			<div className="Modal__container" role="document"></div>
			<div class="modal-dialog" role="document">
				<div class="modal-content ">
					<div class="modal-header">
						<h5 class="modal-title" id="exampleModalLabel">Login</h5>
						<button onClick={props.onCloseModal} type="button" class="close" data-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">×</span>
						</button>
					</div>
					<div class="modal-body">
						<div class="text-center">
							<div class="btn-group btn-block mt-2 mb-2">
								<a href="https://www.facebook.com/" class="btn btn-facebook active">
									<span class="fa fa-facebook"></span>
								</a>
								<a href="https://www.facebook.com/" class="btn btn-block btn-facebook">Facebook</a>
							</div>
							<div class="btn-group btn-block mt-2 mb-2">
								<a href="https://www.google.com/gmail/" class="btn btn-google active">
									<span class="fa fa-google"></span>
								</a>
								<a href="https://www.google.com/gmail/" class="btn btn-block btn-google">Google</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		,
		document.getElementById('modalLogin')
	)
}

export default ModalLogin;