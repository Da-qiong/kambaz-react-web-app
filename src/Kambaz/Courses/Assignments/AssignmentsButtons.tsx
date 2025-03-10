import { IoEllipsisVertical } from 'react-icons/io5';
import { FaPencil, FaTrash } from 'react-icons/fa6';
import GreenCheckmark from '../Modules/GreenCheckmark';

interface AssignmentButtonsProps {
  onEdit: () => void;
  onDelete: () => void;
}

export default function AssignmentButtons({ onEdit, onDelete }: AssignmentButtonsProps) {
  return (
    <div className="ms-auto">
      <GreenCheckmark />
      <FaPencil className="text-primary me-2" onClick={onEdit} />
      <FaTrash className="text-danger fs-4 me-2" onClick={onDelete} />
      <IoEllipsisVertical className="fs-4" />
    </div>
  );
}
