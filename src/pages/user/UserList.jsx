import React from 'react';
import { connect } from 'react-redux';
import { Spin } from 'antd';
import { userActions } from '../../actions/userAction';

class UserList extends React.Component {
	componentDidMount() {
		this.props.fetchAllUsers();
	}
	render() {
		const { users, loading } = this.props;
		return (
			<div className="container mt-4">
				<Spin spinning={loading} tip="Loading...">
					<div className="row">
						{users &&
							users.map((item, index) => {
								return (
									<div className="col-md-3" key={index}>
										<h5>{item.login}</h5>
									</div>
								);
							})}
					</div>
				</Spin>
			</div>
		);
	}
}

const mapStateToProps = ({ users }) => {
	return {
		users   : users.users,
		loading : users.loading
	};
};
const mapDispatchToProps = (dispatch) => {
	return {
		fetchAllUsers : () => dispatch(userActions.fetchUserList())
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(UserList);
