import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'semantic-ui-react';

const QNA = ({ questionsAndAnswers }) => {
  return (
    <Table celled striped selectable size="large">
      <Table.Header style={{backgroundImage : `url("https://static.vecteezy.com/system/resources/thumbnails/008/889/844/small/quiz-set-in-doodle-style-illustration-icon-question-symbol-for-print-and-design-quiz-and-exam-concept-isolated-element-on-black-background-collection-of-sign-for-school-and-event-vector.jpg")`}}>
        <Table.Row >
          <Table.HeaderCell>No.</Table.HeaderCell>
          <Table.HeaderCell>Questions</Table.HeaderCell>
          <Table.HeaderCell>Your Answers</Table.HeaderCell>
          <Table.HeaderCell>Correct Answers</Table.HeaderCell>
          <Table.HeaderCell>Points</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {questionsAndAnswers.map((item, i) => (
          <Table.Row key={i + 1}>
            <Table.Cell>{i + 1}</Table.Cell>
            <Table.Cell>{item.question}</Table.Cell>
            <Table.Cell>{item.user_answer}</Table.Cell>
            <Table.Cell>{item.correct_answer}</Table.Cell>
            <Table.Cell>{item.point}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
};

QNA.propTypes = {
  questionsAndAnswers: PropTypes.array.isRequired
};

export default QNA;
