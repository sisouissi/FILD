import React, { useState, useMemo } from 'react';
import { PHS_SCORE_VARIABLES, getPHSScoreResult } from '../data/phs_diagnostic_data';
import type { PHSScoreAnswers, PHSScoreOptionValue, PHSScoreVariable } from '../types';
import { RotateCcw, CheckCircle, AlertTriangle, XCircle } from './icons';

const VariableSelector: React.FC<{
    variable: PHSScoreVariable;
    selectedValue: PHSScoreOptionValue;
    onChange: (variableId: PHSScoreVariable['id