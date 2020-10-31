import React, { useEffect, useState } from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from 'reactstrap';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';
import { useDispatch, useSelector } from "react-redux";
import { ConfirmModal } from './ConfirmModal';
import {
  getComments,
  getCommentsReset,
  deleteComment,
  deleteCommentReset,
} from '../redux/actions';

export const CommentsModal = (props) => {
  const {
    postId,
    onCancel,
  } = props;

  const dispatch = useDispatch();
  const comments = useSelector(state => state.comments);
  const [rowData, setRowData] = useState([]);
  const [selectedComment, setSelectedComment] = useState();
  const [resultModalInfo, setResultModalInfo] = useState({
    isOpen: false,
    title: '',
    body: '',
  });

  useEffect(() => {
    if (comments.data || comments.error) {
      if (comments.data) {
        setRowData(comments.data);
      }
    }
  }, [comments.data, comments.error]);

  useEffect(() => {
    if (comments.deleteData) {
      if (comments.deleteData) {
        setResultModalInfo({
          isOpen: true,
          title: 'Success!',
          body: 'The comment has been deleted successfully. We re-fetched the comments after deleting, but server was not updated. Resource will not be really updated on the server but it will be faked as if. More details on this page. https://jsonplaceholder.typicode.com/guide/ . Thanks.',
        });
        dispatch(getComments(postId));
      }
    }
    if (comments.deleteError) {
      setResultModalInfo({
        isOpen: true,
        title: 'Failed!',
        body: 'Delete failed. Please try again!',
      });
    }
  }, [comments.deleteData, comments.deleteError]);

  const handleGridReady = params => {
    dispatch(getComments(postId));
  };

  const handleSelect = item => {
    setSelectedComment(item);
  }

  const handleDelete = () => {
    dispatch(deleteComment(selectedComment.id));
    setSelectedComment(null);
  }

  const handleCancel = () => {
    setSelectedComment(null);
  }

  const handleCloseResultModal = () => {
    setResultModalInfo({
      isOpen: false,
      title: '',
      body: '',
    });
    dispatch(deleteCommentReset());
  }

  const onClose = () => {
    dispatch(getCommentsReset());
    onCancel();
  }

  return (
    <>
      <Modal isOpen={true} toggle={onClose} size="xl" onClose={onClose}>
        <ModalHeader onClose={onClose} color="primary">
          Comments
        </ModalHeader>
        <ModalBody>
          <div className="ag-theme-alpine" style={ { height: 500, width: '100%' } }>
            <AgGridReact
              rowData={rowData}
              onGridReady={handleGridReady}
            >
              <AgGridColumn
                field="id"
                sortable={true}
                minWidth={70}
                flex={1}
              />
              <AgGridColumn
                field="name"
                sortable={true}
                wrapText={true}
                minWidth={120}
                flex={3}
              />
              <AgGridColumn
                field="email"
                wrapText={true}
                autoHeight={true}
                minWidth={120}
                flex={3}
              />
              <AgGridColumn
                field="body"
                wrapText={true}
                autoHeight={true}
                minWidth={180}
                flex={5}
              />
              <AgGridColumn
                field="actions"
                minWidth={100}
                flex={1}
                cellRendererFramework={params => (
                  <Button
                    color="danger"
                    size="sm"
                    onClick={() => handleSelect(params.data)}
                  >
                    Delete
                  </Button>
                )}
              />
            </AgGridReact>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button variant="secondary" onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </Modal>

      <ConfirmModal
        isOpen={!!selectedComment}
        title="Delete"
        body="Are you sure want to delete this comment?"
        okTitle="Delete"
        cancelTitle="Cancel"
        onOk={handleDelete}
        onCancel={handleCancel}
      />

      <ConfirmModal
        isOpen={resultModalInfo.isOpen}
        title={resultModalInfo.title}
        body={resultModalInfo.body}
        onCancel={handleCloseResultModal}
        cancelTitle="OK"
      />
    </>
  );
};
