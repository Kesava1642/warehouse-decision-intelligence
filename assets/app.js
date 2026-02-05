/**
 * Warehouse Decision Intelligence - Decision Demo Logic
 * Generates recommendations and supplier matches based on user inputs
 */

(function() {
    'use strict';

    // Equipment display names
    const equipmentNames = {
        'pallet-truck-manual': 'Manual Pallet Truck',
        'pallet-truck-electric': 'Electric Pallet Truck',
        'stretch-wrapper': 'Stretch Wrapper',
        'labels-printing': 'Labels & Printing Equipment',
        'racking': 'Warehouse Racking'
    };

    // Sample supplier data (placeholders)
    const sampleSuppliers = {
        'pallet-truck-manual': [
            { name: 'Supplier A', specialty: 'Wide range of manual handling equipment', priceBand: 'Mid-range', leadTime: '3–5 working days' },
            { name: 'Supplier B', specialty: 'Budget-friendly options with warranty', priceBand: 'Economy', leadTime: '5–7 working days' },
            { name: 'Supplier C', specialty: 'Premium brands with extended service plans', priceBand: 'Premium', leadTime: '2–4 working days' }
        ],
        'pallet-truck-electric': [
            { name: 'Supplier A', specialty: 'Electric MHE specialists with rental options', priceBand: 'Mid-range to Premium', leadTime: '1–2 weeks' },
            { name: 'Supplier B', specialty: 'Refurbished electric trucks with warranty', priceBand: 'Economy to Mid-range', leadTime: '1 week' },
            { name: 'Supplier C', specialty: 'New units with training and maintenance packages', priceBand: 'Premium', leadTime: '2–3 weeks' }
        ],
        'stretch-wrapper': [
            { name: 'Supplier A', specialty: 'Semi-automatic wrappers for SME operations', priceBand: 'Mid-range', leadTime: '2–3 weeks' },
            { name: 'Supplier B', specialty: 'Used and refurbished wrapping equipment', priceBand: 'Economy', leadTime: '1–2 weeks' },
            { name: 'Supplier C', specialty: 'Fully automatic systems with installation', priceBand: 'Premium', leadTime: '4–6 weeks' }
        ],
        'labels-printing': [
            { name: 'Supplier A', specialty: 'Thermal label printers and consumables', priceBand: 'Economy to Mid-range', leadTime: '2–5 working days' },
            { name: 'Supplier B', specialty: 'Industrial labelling systems', priceBand: 'Mid-range', leadTime: '1–2 weeks' },
            { name: 'Supplier C', specialty: 'Integrated barcode and RFID solutions', priceBand: 'Mid-range to Premium', leadTime: '2–4 weeks' }
        ],
        'racking': [
            { name: 'Supplier A', specialty: 'New pallet racking with installation', priceBand: 'Mid-range to Premium', leadTime: '3–6 weeks' },
            { name: 'Supplier B', specialty: 'Used racking, inspected and certified', priceBand: 'Economy', leadTime: '2–4 weeks' },
            { name: 'Supplier C', specialty: 'Bespoke storage solutions and design', priceBand: 'Premium', leadTime: '6–10 weeks' }
        ]
    };

    /**
     * Calculate suitability score based on inputs (deterministic)
     */
    function calculateSuitabilityScore(inputs, decision) {
        const { equipmentType, warehouseSize, usageLevel, budgetRange, urgency } = inputs;
        
        let baseScore = 70; // Start with a reasonable base
        
        // Budget alignment scoring
        const budgetScores = {
            'pallet-truck-manual': { 'under-500': 15, '500-2000': 20, '2000-10000': 15, 'over-10000': 10 },
            'pallet-truck-electric': { 'under-500': -10, '500-2000': 10, '2000-10000': 20, 'over-10000': 15 },
            'stretch-wrapper': { 'under-500': -15, '500-2000': 0, '2000-10000': 20, 'over-10000': 15 },
            'labels-printing': { 'under-500': 15, '500-2000': 20, '2000-10000': 15, 'over-10000': 10 },
            'racking': { 'under-500': -20, '500-2000': -10, '2000-10000': 15, 'over-10000': 20 }
        };
        
        baseScore += budgetScores[equipmentType]?.[budgetRange] || 0;
        
        // Usage and size alignment
        if (usageLevel === 'heavy' && warehouseSize === 'large') baseScore += 5;
        if (usageLevel === 'low' && warehouseSize === 'small') baseScore += 5;
        if (usageLevel === 'heavy' && equipmentType === 'pallet-truck-manual') baseScore -= 5;
        
        // Urgency impact
        if (urgency === 'planned') baseScore += 5;
        if (urgency === 'immediate' && decision.decision.includes('Delay')) baseScore -= 10;
        
        // Decision-specific adjustments
        if (decision.decision.includes('Rent')) baseScore -= 5;
        if (decision.decision.includes('Delay') || decision.decision.includes('Reconsider')) baseScore -= 15;
        
        // Clamp score between 25 and 95
        return Math.max(25, Math.min(95, baseScore));
    }

    /**
     * Determine recommendation status based on score
     */
    function getRecommendationStatus(score, decision) {
        if (decision.decision.includes('Delay') || decision.decision.includes('Reconsider')) {
            return { status: 'Hold', class: 'status-hold', description: 'Review requirements before proceeding' };
        }
        if (score >= 80) {
            return { status: 'Proceed', class: 'status-proceed', description: 'Strong fit for your requirements' };
        }
        if (score >= 60) {
            return { status: 'Proceed with conditions', class: 'status-conditions', description: 'Viable with noted considerations' };
        }
        if (score >= 40) {
            return { status: 'Hold', class: 'status-hold', description: 'Review requirements before proceeding' };
        }
        return { status: 'Reject', class: 'status-reject', description: 'Does not match current requirements' };
    }

    /**
     * Generate pros based on inputs and decision
     */
    function generatePros(inputs, decision) {
        const { equipmentType, warehouseSize, usageLevel, budgetRange, urgency } = inputs;
        const pros = [];

        // Equipment-specific pros
        const equipmentPros = {
            'pallet-truck-manual': [
                'Low acquisition cost compared to powered alternatives',
                'Minimal maintenance requirements',
                'No charging infrastructure needed',
                'Simple operation with quick training',
                'Reliable performance in all warehouse conditions'
            ],
            'pallet-truck-electric': [
                'Reduces operator fatigue on longer routes',
                'Faster throughput for high-volume operations',
                'Improved productivity over manual handling',
                'Modern safety features included',
                'Better for frequent heavy loads'
            ],
            'stretch-wrapper': [
                'Consistent wrap quality improves load stability',
                'Reduces film consumption vs manual wrapping',
                'Faster pallet wrapping increases throughput',
                'Reduces repetitive strain on operators',
                'Professional presentation of outbound loads'
            ],
            'labels-printing': [
                'Fast print speeds for high-volume despatch',
                'Durable labels survive warehouse handling',
                'Integration with WMS/shipping systems',
                'Low cost per label vs pre-printed',
                'Flexibility to print on demand'
            ],
            'racking': [
                'Maximises vertical storage capacity',
                'Improves picking efficiency and access',
                'Professional installation ensures safety',
                'Scalable to match growth',
                'Clear organisation improves inventory accuracy'
            ]
        };

        // Add equipment-specific pros
        const specificPros = equipmentPros[equipmentType] || [];
        pros.push(...specificPros.slice(0, 2));

        // Add context-based pros
        if (urgency === 'planned') {
            pros.push('Planned timeline allows proper specification and comparison');
        }
        if (budgetRange === 'over-10000' || budgetRange === '2000-10000') {
            pros.push('Budget supports quality equipment with warranty');
        }
        if (decision.decision.includes('Used')) {
            pros.push('Quality used equipment offers immediate cost savings');
        }
        if (warehouseSize === 'large' && usageLevel === 'heavy') {
            pros.push('Equipment well-suited to high-throughput environment');
        }

        return pros.slice(0, 3);
    }

    /**
     * Generate risks based on inputs and decision
     */
    function generateRisks(inputs, decision) {
        const { equipmentType, warehouseSize, usageLevel, budgetRange, urgency } = inputs;
        const risks = [];

        // Budget-related risks
        if (budgetRange === 'under-500') {
            if (equipmentType === 'pallet-truck-electric' || equipmentType === 'stretch-wrapper' || equipmentType === 'racking') {
                risks.push('Budget may not cover equipment that meets operational needs');
            }
        }

        // Urgency risks
        if (urgency === 'immediate') {
            risks.push('Rushed purchase may limit options or increase cost');
        }

        // Equipment-specific risks
        const equipmentRisks = {
            'pallet-truck-manual': [
                'Heavy usage may cause operator fatigue',
                'Not suitable for very long travel distances',
                'Manual handling limits throughput capacity'
            ],
            'pallet-truck-electric': [
                'Requires charging infrastructure investment',
                'Battery replacement is a significant future cost',
                'Operator certification may be required'
            ],
            'stretch-wrapper': [
                'Requires level floor for proper operation',
                'Ongoing film costs must be factored in',
                'May be underutilised if volumes are low'
            ],
            'labels-printing': [
                'Consumable costs add up over time',
                'Software integration complexity possible',
                'Dependent on reliable network connectivity'
            ],
            'racking': [
                'Installation requires qualified contractor',
                'Annual SEMA inspection mandatory',
                'Floor condition affects load capacity'
            ]
        };

        const specificRisks = equipmentRisks[equipmentType] || [];
        risks.push(...specificRisks.slice(0, 2));

        // Decision-specific risks
        if (decision.decision.includes('Used')) {
            risks.push('Used equipment may have shorter remaining lifespan');
        }
        if (decision.decision.includes('Rent')) {
            risks.push('Rental costs accumulate if need becomes long-term');
        }

        return risks.slice(0, 3);
    }

    /**
     * Generate next actions based on inputs and decision
     */
    function generateNextActions(inputs, decision) {
        const { equipmentType, urgency } = inputs;
        const actions = [];

        // Decision-specific actions
        if (decision.decision.includes('Buy New')) {
            actions.push('Request quotes from 2–3 suppliers for comparison');
            actions.push('Confirm delivery timeline meets your operational needs');
        } else if (decision.decision.includes('Used')) {
            actions.push('Request inspection report and service history');
            actions.push('Verify warranty terms on used equipment');
        } else if (decision.decision.includes('Rent')) {
            actions.push('Compare short-term vs long-term rental costs');
            actions.push('Clarify maintenance responsibility in rental agreement');
        } else if (decision.decision.includes('Delay')) {
            actions.push('Review budget allocation for this category');
            actions.push('Assess whether current workaround is sustainable');
        }

        // Equipment-specific actions
        const equipmentActions = {
            'pallet-truck-manual': 'Check weight capacity matches your heaviest loads',
            'pallet-truck-electric': 'Plan charging location and assess power supply',
            'stretch-wrapper': 'Measure floor levelness where unit will be installed',
            'labels-printing': 'Confirm software compatibility with your systems',
            'racking': 'Arrange site survey for professional layout design'
        };

        if (equipmentActions[equipmentType]) {
            actions.push(equipmentActions[equipmentType]);
        }

        // Urgency-based actions
        if (urgency === 'immediate') {
            actions.push('Contact suppliers about stock availability today');
        } else {
            actions.push('Schedule supplier demonstrations before final decision');
        }

        return actions.slice(0, 3);
    }

    /**
     * Generate decision recommendation based on inputs
     */
    function generateDecision(inputs) {
        const { equipmentType, warehouseSize, usageLevel, budgetRange, urgency } = inputs;
        
        let decision = 'Buy New';
        let spec = '';
        let avoidWarning = '';
        let reasons = [];
        let caution = '';

        // Decision logic based on equipment type
        switch (equipmentType) {
            case 'pallet-truck-manual':
                spec = 'Standard manual pallet truck, 2,000–2,500kg capacity';
                
                if (usageLevel === 'heavy') {
                    spec = 'Heavy-duty manual pallet truck with reinforced forks, 2,500kg+ capacity';
                    reasons.push('Heavy usage requires more durable construction to reduce maintenance');
                    
                    if (warehouseSize === 'large') {
                        avoidWarning = 'Consider whether electric would reduce operator fatigue over long distances.';
                    }
                }
                
                if (urgency === 'immediate' && budgetRange === 'under-500') {
                    decision = 'Buy Used';
                    reasons.push('Immediate need with limited budget suits quality used equipment');
                    reasons.push('Manual pallet trucks have fewer components that degrade with age');
                } else if (budgetRange === 'under-500') {
                    decision = 'Buy New (Entry-level)';
                    reasons.push('Entry-level manual trucks available within budget');
                } else {
                    reasons.push('Manual pallet trucks are cost-effective for most warehouse operations');
                }
                
                if (reasons.length < 3) {
                    reasons.push('Low maintenance requirements compared to powered alternatives');
                }
                
                caution = 'Ensure operators are trained on safe load limits and correct lifting technique.';
                avoidWarning = avoidWarning || 'Avoid unbranded imports without UK parts availability.';
                break;

            case 'pallet-truck-electric':
                spec = 'Pedestrian electric pallet truck, 1,500–2,000kg capacity';
                
                if (budgetRange === 'under-500') {
                    decision = 'Rent or Reconsider';
                    spec = 'Short-term rental or consider manual alternative';
                    reasons.push('Electric pallet trucks typically start from £2,000+ new');
                    reasons.push('Rental allows immediate access without capital outlay');
                    reasons.push('Reassess whether electric is essential for your operation');
                    avoidWarning = 'Avoid committing to purchase if budget cannot cover maintenance and battery costs.';
                } else if (budgetRange === '500-2000') {
                    decision = 'Buy Used or Rent';
                    spec = 'Refurbished electric pallet truck with warranty';
                    reasons.push('Budget suits quality refurbished equipment with warranty');
                    reasons.push('Rental may be better if usage is seasonal or uncertain');
                    if (urgency === 'immediate') {
                        reasons.push('Used stock often available faster than new orders');
                    } else {
                        reasons.push('Planned purchase allows time to find the right used unit');
                    }
                    avoidWarning = 'Avoid units without clear service history or battery health report.';
                } else {
                    if (usageLevel === 'heavy') {
                        spec = 'Ride-on or heavy-duty pedestrian electric truck, 2,000kg+ capacity';
                        reasons.push('Heavy usage justifies investment in durable, efficient equipment');
                    }
                    decision = 'Buy New';
                    reasons.push('Budget allows for new equipment with full warranty');
                    reasons.push('New units include latest safety features and efficiency improvements');
                    if (reasons.length < 3) {
                        reasons.push('Manufacturer support available for maintenance and parts');
                    }
                    avoidWarning = 'Avoid over-specifying capacity beyond your actual pallet weights.';
                }
                
                caution = 'Factor in charging infrastructure, battery replacement costs, and operator certification (if ride-on).';
                break;

            case 'stretch-wrapper':
                if (warehouseSize === 'small' && urgency === 'planned') {
                    decision = 'Buy Used or Semi-Automatic';
                    spec = 'Semi-automatic turntable wrapper or quality used unit';
                    reasons.push('Small operation may not justify fully automatic investment');
                    reasons.push('Planned timeline allows sourcing of quality used equipment');
                    reasons.push('Semi-auto wrappers offer good balance of speed and cost');
                    avoidWarning = 'Avoid fully manual wrapping if volume exceeds 20 pallets per day.';
                } else if (warehouseSize === 'large' && usageLevel === 'heavy') {
                    decision = 'Buy New with Service Contract';
                    spec = 'Fully automatic stretch wrapper with pre-stretch capability';
                    reasons.push('High throughput requires reliable, fast wrapping');
                    reasons.push('Service contract reduces downtime risk in demanding environment');
                    reasons.push('Pre-stretch feature reduces film consumption significantly');
                    avoidWarning = 'Avoid standalone purchase without considering installation and training.';
                } else if (budgetRange === 'under-500' || budgetRange === '500-2000') {
                    decision = 'Delay or Manual Process';
                    spec = 'Consider manual wrapping or save for adequate equipment';
                    reasons.push('Quality stretch wrappers typically start from £2,500+');
                    reasons.push('Under-specified equipment leads to poor wrap quality and waste');
                    reasons.push('Manual wrapping tools may suffice for low volumes');
                    avoidWarning = 'Avoid cheap wrappers that lack consistent tension control.';
                } else {
                    decision = 'Buy New';
                    spec = 'Semi-automatic or automatic wrapper matched to throughput';
                    reasons.push('Budget allows for equipment matched to your operation');
                    if (urgency === 'immediate') {
                        reasons.push('Some suppliers stock standard models for quick delivery');
                    } else {
                        reasons.push('Planned purchase allows for proper specification and comparison');
                    }
                    reasons.push('Modern wrappers reduce film usage and improve load stability');
                    avoidWarning = 'Avoid over-automating if current volumes don\'t justify the investment.';
                }
                
                caution = 'Ensure floor is level where wrapper will be installed; uneven surfaces affect wrap quality.';
                break;

            case 'labels-printing':
                spec = 'Thermal transfer label printer with appropriate resolution';
                
                if (budgetRange === 'under-500') {
                    decision = 'Buy New (Entry-level)';
                    spec = 'Desktop thermal printer, 203dpi, suitable for shipping labels';
                    reasons.push('Entry-level thermal printers available within budget');
                    reasons.push('Desktop models suit low to medium label volumes');
                    reasons.push('Direct thermal option reduces ongoing ribbon costs');
                    avoidWarning = 'Avoid inkjet for warehouse labels—thermal is more durable and faster.';
                } else if (usageLevel === 'heavy' || warehouseSize === 'large') {
                    decision = 'Buy New (Industrial)';
                    spec = 'Industrial thermal printer, 300dpi, high-volume capability';
                    reasons.push('Industrial printers designed for continuous high-volume use');
                    reasons.push('Higher resolution needed if labels include small barcodes');
                    reasons.push('Metal construction withstands warehouse environment');
                    avoidWarning = 'Avoid desktop-class printers for industrial throughput requirements.';
                } else {
                    decision = 'Buy New';
                    spec = 'Mid-range thermal printer matched to label volume and size';
                    reasons.push('Mid-range printers balance cost with reliability');
                    reasons.push('Consider ongoing consumable costs, not just hardware');
                    reasons.push('Check compatibility with your WMS or shipping software');
                    avoidWarning = 'Avoid proprietary label formats that lock you into one supplier.';
                }
                
                caution = 'Factor in label and ribbon consumable costs when comparing options.';
                break;

            case 'racking':
                if (urgency === 'immediate' && budgetRange !== 'over-10000') {
                    decision = 'Buy Used (Inspected)';
                    spec = 'Used pallet racking, SEMA-inspected, with installation';
                    reasons.push('Used racking available faster than new orders');
                    reasons.push('Quality used racking performs identically to new when properly inspected');
                    reasons.push('Budget preserved for other operational needs');
                    avoidWarning = 'Avoid any used racking without SEMA inspection certificate.';
                } else if (budgetRange === 'under-500' || budgetRange === '500-2000') {
                    decision = 'Delay or Phase';
                    spec = 'Plan phased installation or explore used options';
                    reasons.push('Quality racking installation typically requires £3,000+ minimum');
                    reasons.push('Under-specified racking is a serious safety risk');
                    reasons.push('Consider phased approach: start with essential bays');
                    avoidWarning = 'Never compromise on racking quality or installation standards.';
                } else if (warehouseSize === 'large' && budgetRange === 'over-10000') {
                    decision = 'Buy New with Design Service';
                    spec = 'Professionally designed racking system with installation';
                    reasons.push('Large installations benefit from professional layout design');
                    reasons.push('New racking comes with full load certificates');
                    reasons.push('Warranty and ongoing inspection services included');
                    avoidWarning = 'Avoid self-designed layouts without professional load calculations.';
                } else {
                    decision = 'Buy New or Used';
                    spec = 'Standard pallet racking matched to your pallet sizes and weights';
                    reasons.push('Budget allows for proper specification');
                    reasons.push('Both new and used options viable—depends on timeline');
                    reasons.push('Professional installation recommended for safety compliance');
                    avoidWarning = 'Avoid mixing components from different manufacturers.';
                }
                
                caution = 'All racking must be installed to SEMA guidelines and inspected annually by a qualified SARI inspector.';
                break;

            default:
                spec = 'General warehouse equipment';
                reasons = ['Complete the form for specific recommendations'];
                avoidWarning = 'Provide more details for tailored advice.';
                caution = 'Always verify equipment meets your operational requirements.';
        }

        return {
            decision,
            spec,
            avoidWarning,
            reasons: reasons.slice(0, 3),
            caution
        };
    }

    /**
     * Get supplier matches for equipment type
     */
    function getSupplierMatches(equipmentType, decision) {
        const suppliers = sampleSuppliers[equipmentType] || sampleSuppliers['pallet-truck-manual'];
        
        // Adjust match reasons based on decision
        return suppliers.map((supplier, index) => {
            let matchReason = supplier.specialty;
            
            if (decision.includes('Used') && supplier.priceBand.includes('Economy')) {
                matchReason = 'Specialises in quality used equipment matching your requirements';
            } else if (decision.includes('Rent') && index === 0) {
                matchReason = 'Offers flexible rental terms suitable for your situation';
            } else if (decision.includes('New') && supplier.priceBand.includes('Premium')) {
                matchReason = 'New equipment specialist with comprehensive warranty options';
            }
            
            return {
                ...supplier,
                matchReason
            };
        });
    }

    /**
     * Get score color class
     */
    function getScoreColorClass(score) {
        if (score >= 75) return 'score-high';
        if (score >= 50) return 'score-medium';
        return 'score-low';
    }

    /**
     * Render results to the page
     */
    function renderResults(inputs, decision, suppliers) {
        const container = document.getElementById('results-container');
        const equipmentName = equipmentNames[inputs.equipmentType] || 'Equipment';
        
        // Calculate score and status
        const score = calculateSuitabilityScore(inputs, decision);
        const status = getRecommendationStatus(score, decision);
        const pros = generatePros(inputs, decision);
        const risks = generateRisks(inputs, decision);
        const nextActions = generateNextActions(inputs, decision);
        const scoreColorClass = getScoreColorClass(score);
        
        const resultsHTML = `
            <div class="results-content">
                <!-- Decision Summary Panel -->
                <div class="decision-summary-panel">
                    <div class="panel-header">
                        <h3>Decision Summary</h3>
                        <span class="equipment-badge">${equipmentName}</span>
                    </div>
                    
                    <!-- Suitability Score -->
                    <div class="score-section">
                        <div class="score-header">
                            <span class="score-label">Suitability Score</span>
                            <span class="score-value ${scoreColorClass}">${score}</span>
                        </div>
                        <div class="score-bar">
                            <div class="score-fill ${scoreColorClass}" style="width: ${score}%"></div>
                        </div>
                        <div class="score-scale">
                            <span>0</span>
                            <span>25</span>
                            <span>50</span>
                            <span>75</span>
                            <span>100</span>
                        </div>
                    </div>
                    
                    <!-- Recommendation Status -->
                    <div class="recommendation-status ${status.class}">
                        <div class="status-badge">${status.status}</div>
                        <div class="status-description">${status.description}</div>
                    </div>
                    
                    <!-- Decision Details -->
                    <div class="decision-details">
                        <div class="detail-row">
                            <span class="detail-label">Recommended action</span>
                            <span class="detail-value">${decision.decision}</span>
                        </div>
                        <div class="detail-row">
                            <span class="detail-label">Specification</span>
                            <span class="detail-value">${decision.spec}</span>
                        </div>
                    </div>
                    
                    <!-- Pros and Risks Grid -->
                    <div class="pros-risks-grid">
                        <div class="pros-section">
                            <h4>
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <polyline points="20 6 9 17 4 12"></polyline>
                                </svg>
                                Top 3 Pros
                            </h4>
                            <ul class="pros-list">
                                ${pros.map(pro => `<li>${pro}</li>`).join('')}
                            </ul>
                        </div>
                        <div class="risks-section">
                            <h4>
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <line x1="12" y1="8" x2="12" y2="12"></line>
                                    <line x1="12" y1="16" x2="12.01" y2="16"></line>
                                </svg>
                                Top 3 Risks
                            </h4>
                            <ul class="risks-list">
                                ${risks.map(risk => `<li>${risk}</li>`).join('')}
                            </ul>
                        </div>
                    </div>
                    
                    <!-- Next Actions -->
                    <div class="next-actions-section">
                        <h4>
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <polygon points="5 3 19 12 5 21 5 3"></polygon>
                            </svg>
                            Next Actions
                        </h4>
                        <ul class="actions-list">
                            ${nextActions.map((action, i) => `<li><span class="action-number">${i + 1}</span>${action}</li>`).join('')}
                        </ul>
                    </div>
                    
                    <!-- Caution Note -->
                    <div class="caution-note">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                            <line x1="12" y1="9" x2="12" y2="13"></line>
                            <line x1="12" y1="17" x2="12.01" y2="17"></line>
                        </svg>
                        <span>${decision.caution}</span>
                    </div>
                </div>
                
                <!-- Supplier Panel -->
                <div class="supplier-panel">
                    <div class="panel-header">
                        <h3>Matched Suppliers</h3>
                        <span class="supplier-count">${suppliers.length} sample options</span>
                    </div>
                    
                    <div class="supplier-cards">
                        ${suppliers.map(supplier => `
                            <div class="supplier-card">
                                <div class="supplier-name">${supplier.name}</div>
                                <div class="supplier-match">${supplier.matchReason}</div>
                                <div class="supplier-details">
                                    <div class="supplier-detail">
                                        <span class="detail-label">Price band:</span>
                                        <span class="detail-value">${supplier.priceBand}</span>
                                    </div>
                                    <div class="supplier-detail">
                                        <span class="detail-label">Lead time:</span>
                                        <span class="detail-value">${supplier.leadTime}</span>
                                    </div>
                                </div>
                                <div class="supplier-actions">
                                    <a href="mailto:hello@example.com?subject=Quote%20request%20-%20${encodeURIComponent(equipmentName)}" class="btn btn-small btn-primary">Request quote</a>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                    
                    <p class="supplier-note">Sample suppliers shown for demonstration. Live directory available after pilot.</p>
                </div>
            </div>
        `;
        
        container.innerHTML = resultsHTML;
        container.classList.add('has-results');
        
        // Scroll to results on mobile
        if (window.innerWidth < 768) {
            container.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }

    /**
     * Initialize the demo form
     */
    function initDemo() {
        const form = document.getElementById('decision-form');
        
        if (!form) return;
        
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Gather inputs
            const inputs = {
                equipmentType: document.getElementById('equipment-type').value,
                warehouseSize: document.getElementById('warehouse-size').value,
                usageLevel: document.getElementById('usage-level').value,
                budgetRange: document.getElementById('budget-range').value,
                urgency: document.getElementById('urgency').value,
                location: document.getElementById('location').value
            };
            
            // Validate required fields
            if (!inputs.equipmentType || !inputs.warehouseSize || !inputs.usageLevel || 
                !inputs.budgetRange || !inputs.urgency) {
                alert('Please complete all required fields.');
                return;
            }
            
            // Generate decision
            const decision = generateDecision(inputs);
            
            // Get supplier matches
            const suppliers = getSupplierMatches(inputs.equipmentType, decision.decision);
            
            // Render results
            renderResults(inputs, decision, suppliers);
        });
    }

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initDemo);
    } else {
        initDemo();
    }
})();

/**
 * Mobile menu toggle (all pages)
 */
(function() {
    'use strict';

    function initMobileNav() {
        const menuBtn = document.querySelector('.mobile-menu-btn');
        const nav = document.querySelector('.nav');

        if (!menuBtn || !nav) return;

        menuBtn.addEventListener('click', function() {
            nav.classList.toggle('nav-open');
            menuBtn.classList.toggle('active');
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initMobileNav);
    } else {
        initMobileNav();
    }
})();

