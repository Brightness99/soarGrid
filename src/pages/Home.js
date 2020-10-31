import React, { useEffect, useState } from 'react';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';
import { useDispatch, useSelector } from "react-redux";
import { CommentsModal, Loader } from '../components';
import { getPosts } from '../redux/actions';

const Home = () => {
  const dispatch = useDispatch();
  const posts = useSelector(state => state.posts);
  const [rowData, setRowData] = useState([]);
  const [postId, setPostId] = useState(); 

  useEffect(() => {
    if (posts.data || posts.error) {
      if (posts.data) {
        setRowData(posts.data);
      }
    }
  }, [posts.data, posts.error]);

 
  const handleGridReady = params => {
    dispatch(getPosts());
  };

  const handleRowClicked = e => {
    setPostId(e.data.id);
  }

  const handleModalClose = () => setPostId(null);

  return (
    <section className="section">
      <div className="container">
        <h3 className="heading">Posts</h3>
        <div className="ag-theme-alpine" style={ { height: 600, width: '100%' } }>
          <AgGridReact
            rowData={rowData}
            onGridReady={handleGridReady}
            onRowClicked={handleRowClicked}
          >
            <AgGridColumn
              field="id"
              sortable={true}
              minWidth={70}
              flex={1}
            />
            <AgGridColumn
              field="userId"
              sortable={true}
              minWidth={100}
              flex={1}
            />
            <AgGridColumn
              field="title"
              sortable={true}
              wrapText={true}
              autoHeight={true}
              minWidth={100}
              flex={5}
            />
            <AgGridColumn
              field="body"
              sortable={true} 
              wrapText={true}
              autoHeight={true}
              minWidth={100}
              flex={5}
            />
          </AgGridReact>
        </div>
      </div>

      {postId && (
        <CommentsModal
          postId={postId}
          onCancel={handleModalClose}
        />
      )}
    </section>
  );
}

export default Home;
