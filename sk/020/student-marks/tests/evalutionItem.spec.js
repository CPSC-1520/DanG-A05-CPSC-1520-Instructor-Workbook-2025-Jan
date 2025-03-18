import { describe, it, expect } from 'vitest';
import { Course, EvaluationItem } from '../js/course-marks';

/*
  it.todo("", () => {
    // Arrange
    // Act
    // Assert
  });
*/


describe("EvaluationItem should", () => {
    /*
    preserve name
    preserve weight
    preserve earned points
    preserve total points

    calculate percent
    calculate weighted percent

    reject invalid name
    reject invalid weight
    reject invalid earned points
    reject invalid total points
    */
  it("preserve name", () => {
    // Arrange
    let name = 'Lab 1';
    // Act
    let actual = new EvaluationItem(name, 20);
    // Assert
    expect(actual.name).toBe(name);
  });

  it("preserve weight", () => {
    // Arrange
    let weight = 15;
    // Act
    let actual = new EvaluationItem('Quiz 1', weight);
    // Assert
    expect(actual.weight).toBe(weight);
  });
  
  it("preserve earned points", () => {
    // Arrange
    let earned = 12;
    // Act
    let actual = new EvaluationItem('Lab 2', 10, earned, 20);
    // Assert
    expect(actual.earned).toBe(earned);
  });

  it("preserve total points", () => {
    // Arrange
    let possible = 20;
    // Act
    let actual = new EvaluationItem('Lab 3', 10, 15, possible);
    // Assert
    expect(actual.possible).toBe(possible);
  });

  it.each([
    { earned: 12, possible: 20, expected: 60 },
    { earned: null, possible: 20, expected: null }
  ])
  ("calculate $expected percent from $earned / $possible", ({earned, possible, expected}) => {
    // Arrange
    // Act
    let actual = new EvaluationItem('Quiz 2', 10, earned, possible);
    // Assert
    expect(actual.getPercent()).toBe(expected);
  });

  it.each([
    { weight: 10, earned: 12, possible: 20, expected: 6 },
    { weight: 10, earned: null, possible: 20, expected: null }
  ])
  ("calculate $expected weighted percent from $earned / $possible on weight $weight", ({weight, earned, possible, expected}) => {
    // Arrange
    // Act
    let actual = new EvaluationItem('Quiz 3', weight, earned, possible);
    // Assert
    expect(actual.getWeightedPercent()).toBe(expected);
  });

  it.todo("reject invalid name", () => {
    // Arrange
    // Act
    // Assert
  });


  it.each([
    { given: undefined, expected: null },
    { given: null, expected: null }
  ])
  ("treat $given as $expected for earned points", ({given, expected}) => {
    // Arrange
    let item = new EvaluationItem('Quiz 1', 15, given, null);
    // Act
    let actual = item.earned;
    // Assert
    expect(actual).toBe(expected);
  });

  it.each([
    { given: undefined, expected: null },
    { given: null, expected: null },
  ])("treat $given as $expected for possible points", ({ given, expected }) => {
    // Arrange
    let item = new EvaluationItem("Quiz 1", 15, null, given);
    // Act
    let actual = item.possible;
    // Assert
    expect(actual).toBe(expected);
  });


  it.todo("reject invalid weight", () => {
    // Arrange
    // Act
    // Assert
  });
  it.todo("reject invalid earned points", () => {
    // Arrange
    // Act
    // Assert
  });
  it.todo("reject invalid total points", () => {
    // Arrange
    // Act
    // Assert
  });

  it('accept a 0 for earned points', () => {
    // Arrange
    let given = 0;
    let sut = new EvaluationItem('Quiz 4', 15, given, 17);
    // Act
    let actual = sut.earned;
    // Assert
    expect(actual).toBe(given);
  })
});
