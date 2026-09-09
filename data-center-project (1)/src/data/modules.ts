export type PipelineStage = 
  | 'WORKFLOW'
  | 'CLUSTERING' 
  | 'RESOURCES' 
  | 'RENEWABLE' 
  | 'WEATHER' 
  | 'CARBON' 
  | 'SCHEDULER' 
  | 'SIMULATION' 
  | 'MIGRATION' 
  | 'POWER' 
  | 'FAILURE' 
  | 'RESULTS'
  | 'NONE';

export interface ModuleDefinition {
  id: string;
  number: string;
  name: string;
  category: string;
  pipelineStage: PipelineStage;
  purpose: string;
  placeholders: string[];
}

export const EXECUTION_MODULES: ModuleDefinition[] = [
  {
    id: 'workflow-intake',
    number: '00',
    name: 'Workflow Intake Completed',
    category: 'HIDDEN',
    pipelineStage: 'WORKFLOW',
    purpose: 'Initial workflow validation and preparation.',
    placeholders: ['Uploaded File Metadata', 'Preparation Validation Results']
  },
  {
    id: 'clustering',
    number: '01',
    name: 'Dynamic Workflow Clustering',
    category: 'WORKFLOW',
    pipelineStage: 'CLUSTERING',
    purpose: 'Groups workflow tasks dynamically to optimize execution and minimize overhead.',
    placeholders: ['Workflow task information', 'K-Means clustering visualization', 'Task/cluster table', 'Clustering results summary']
  },
  {
    id: 'resources',
    number: '02',
    name: 'Resource Monitoring',
    category: 'WORKFLOW',
    pipelineStage: 'RESOURCES',
    purpose: 'Monitors real-time resource utilization across the cloud data center.',
    placeholders: ['Server resource utilization graphs', 'CPU utilization', 'RAM utilization', 'Server comparison', 'Resource status tables']
  },
  {
    id: 'renewable',
    number: '03',
    name: 'Renewable Energy Prediction',
    category: 'AI INTELLIGENCE',
    pipelineStage: 'RENEWABLE',
    purpose: 'Forecasts renewable energy availability to support carbon-aware cloud scheduling.',
    placeholders: ['Renewable-energy inputs', 'Prediction model metrics', 'Forecast graph', 'Prediction table', 'Renewable availability index']
  },
  {
    id: 'weather',
    number: '04',
    name: 'Weather-Aware Carbon Forecast',
    category: 'AI INTELLIGENCE',
    pipelineStage: 'WEATHER',
    purpose: 'Uses weather and environmental conditions to support carbon-intensity forecasting for sustainable cloud execution.',
    placeholders: ['NASA POWER weather information', 'Weather trends analysis', 'Weather-aware carbon analysis', 'Forecast visualization', 'Weather correlation tables']
  },
  {
    id: 'carbon',
    number: '05',
    name: 'AI-Based Carbon Prediction',
    category: 'AI INTELLIGENCE',
    pipelineStage: 'CARBON',
    purpose: 'Predict carbon intensity using AI-driven analysis to support carbon-aware workflow scheduling.',
    placeholders: ['Electricity Maps data', 'Historical carbon intensity', 'AI prediction model', 'Carbon forecast graph', 'Prediction data table']
  },
  {
    id: 'scheduler',
    number: '06',
    name: 'Carbon-Aware Intelligent Resource Scheduler',
    category: 'OPTIMIZATION',
    pipelineStage: 'SCHEDULER',
    purpose: 'Schedules clustered tasks to the most sustainable servers.',
    placeholders: ['Server cards (side-by-side)', 'CPU & RAM metrics', 'Carbon intensity & Renewable availability', 'Scheduling score evaluation', 'Selected server decision & reasoning']
  },
  {
    id: 'simulation',
    number: '07',
    name: 'CloudSim Plus Simulation',
    category: 'EXECUTION',
    pipelineStage: 'SIMULATION',
    purpose: 'Simulate scheduled workflow execution across cloud resources and evaluate execution and resource behavior.',
    placeholders: ['Simulation progress', 'Workflow & task execution status', 'VM status', 'Resource usage monitoring', 'Simulation graphs', 'Simulation output tables']
  },
  {
    id: 'migration',
    number: '08',
    name: 'VM Migration',
    category: 'EXECUTION',
    pipelineStage: 'MIGRATION',
    purpose: 'Optimizes VM placement through migration and resource consolidation.',
    placeholders: ['Overloaded server detection', 'Candidate servers analysis', 'Migration decision log', 'Source & Destination server status', 'Migration status', 'Before/After resource state']
  },
  {
    id: 'power',
    number: '09',
    name: 'AI-Based Server Power Management',
    category: 'EXECUTION',
    pipelineStage: 'POWER',
    purpose: 'Optimizes server power states using workload, resource utilization, and carbon-aware intelligence.',
    placeholders: ['CPU & RAM utilization', 'Server power consumption', 'Idle server detection', 'Workload prediction', 'Sleep Mode & DVFS activation', 'Power-saving results']
  },
  {
    id: 'failure',
    number: '10',
    name: 'Self-Healing Failure Prediction',
    category: 'RELIABILITY',
    pipelineStage: 'FAILURE',
    purpose: 'Predicts infrastructure failures and enables proactive recovery through intelligent resource management.',
    placeholders: ['CPU & RAM abnormal trends', 'Abnormal behavior detection', 'Failure probability metrics', 'Failure reason analysis', 'Recommended action', 'Migration/Self-healing action log']
  },
  {
    id: 'results',
    number: '11',
    name: 'Sustainability Monitoring Dashboard',
    category: 'RESULTS',
    pipelineStage: 'RESULTS',
    purpose: 'Summarizes overall sustainability improvements and system performance.',
    placeholders: ['Actual results & Before vs After comparison', 'Carbon, Energy & Renewable results', 'Scheduling, Simulation & Migration results', 'Power-management & Failure/Self-healing results', 'Data export controls']
  },
  {
    id: 'system',
    number: 'SYS',
    name: 'System Health',
    category: 'SYSTEM',
    pipelineStage: 'NONE',
    purpose: 'Monitors overall platform health and service connectivity.',
    placeholders: ['System status overview', 'Uptime metrics', 'Service health indicators']
  }
];
