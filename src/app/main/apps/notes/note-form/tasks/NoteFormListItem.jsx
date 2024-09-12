import _ from '@lodash';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import ListItem from '@mui/material/ListItem';
import clsx from 'clsx';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';

/**
 * The note form list item.
 */
function NoteFormListItem(props) {
	const { onListItemChange, item, onListItemRemove } = props;

	function handleChange(event) {
		onListItemChange(
			_.setIn(
				item,
				event.target.name,
				event.target.type === 'checkbox' ? event.target.checked : event.target.value
			)
		);
	}

	if (!item) {
		return null;
	}

	return (
		<ListItem
			className="px-12"
			key={item.id}
			dense
		>
			<Checkbox
				className="p-0"
				checked={item.completed}
				tabIndex={-1}
				disableRipple
				name="completed"
				onChange={handleChange}
				color="default"
				size="small"
			/>
			<Input
				className={clsx('flex flex-1', item.completed && 'line-through opacity-50')}
				name="content"
				value={item.content}
				onChange={handleChange}
				disableUnderline
				size="small"
			/>
			<IconButton
				className=""
				aria-label="Delete"
				onClick={() => onListItemRemove(item.id)}
				size="small"
			>
				<FuseSvgIcon size={20}>heroicons-outline:trash</FuseSvgIcon>
			</IconButton>
		</ListItem>
	);
}

export default NoteFormListItem;
