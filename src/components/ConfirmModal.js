import React, { useEffect, useState } from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from 'reactstrap';

export const ConfirmModal = (props) => {
  const {
    isOpen,
    onCancel,
    onOk,
    title,
    body,
    okTitle,
    cancelTitle,
  } = props;

  return (
    <Modal isOpen={isOpen} toggle={onCancel}>
      <ModalHeader toggle={onCancel}>{title}</ModalHeader>
      <ModalBody>
        {body}
      </ModalBody>
      <ModalFooter>
        {cancelTitle && <Button color="secondary" size="sm" onClick={onCancel}>{cancelTitle}</Button>}{' '}
        {okTitle && <Button color="danger" size="sm" onClick={onOk}>{okTitle}</Button>}
      </ModalFooter>
    </Modal>
  );
}