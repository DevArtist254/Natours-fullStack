import useFirebaseStorage from './../hooks/useFirebaseStorage';

const Progress = ({ files }) => {
  const { progress, url } = useFirebaseStorage(files);
  return <div>{url}</div>;
};

export default Progress;
