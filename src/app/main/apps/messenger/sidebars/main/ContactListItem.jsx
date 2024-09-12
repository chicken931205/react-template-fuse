import { styled } from '@mui/material/styles';
import ListItemText from '@mui/material/ListItemText';
import NavLinkAdapter from '@fuse/core/NavLinkAdapter';
import ListItemButton from '@mui/material/ListItemButton';
import UserAvatar from '../../UserAvatar';

const StyledListItem = styled(ListItemButton)(({ theme }) => ({
	'&.active': {
		backgroundColor: theme.palette.background.default
	}
}));

/**
 * The contact list item.
 */
function ContactListItem(props) {
	const { item } = props;
	return (
		<StyledListItem
			component={NavLinkAdapter}
			className="px-24 py-12 min-h-80"
			to={`/apps/messenger/${item.id}`}
			end
			activeClassName="active"
		>
			<UserAvatar user={item} />

			<ListItemText
				classes={{
					root: 'min-w-px px-16',
					primary: 'font-medium text-base',
					secondary: 'truncate'
				}}
				primary={item.name}
			/>
		</StyledListItem>
	);
}

export default ContactListItem;
