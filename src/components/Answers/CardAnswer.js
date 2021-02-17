import React, {useState} from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

//components
import ModalAnswer from './ModalAnswer';
import CardCustom from '../utils/CardCustom';

export default function CardAnswer({answer}) {

  const [open, setOpen] = useState(false);

  const titleModal = <>
    <Typography component="div">
      <Box fontWeight="fontWeightBold">
        {answer.title}
      </Box>
      <Box fontStyle="italic" mb={2} fontSize="subtitle2.fontSize">
        Authors: {answer.authors}
      </Box>
    </Typography>
  </>
  
  const bodyModal = <>
    <Typography component="div">
      <Box component="p">
        <span>Abstract: </span>{answer.abstract}
      </Box>
      Publish Time: {answer.publish_time}
      <br/>
      DOI:
      <a href={answer.doi ? `https://doi.org/${answer.doi}`: '#'}>
        https://doi.org/{answer.doi}
      </a>
    </Typography>
  </>

  return (
    <>
      <CardCustom
        title={answer.title}
        authors={answer.authors}
        body={
          <>
            Answer: {answer.sentence_beginning}
            {answer.answer}
            {answer.sentence_ending}
          </>
        }
        secondarybody={
          <>
            Publish Time: {answer.publish_time}
            <br/>
            DOI:
            <a href={answer.doi ? `https://doi.org/${answer.doi}`: '#'}>
              https://doi.org/{answer.doi}
            </a>
          </>
        }
        button="See more"
        buttonAction={() => setOpen(true)}
      />
      <ModalAnswer
        open={open}
        setOpen={setOpen}
        title={titleModal}
        body={bodyModal}
      />
    </>
  );
}