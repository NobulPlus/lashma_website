
import { motion } from 'framer-motion';
import { FileText, ExternalLink } from 'lucide-react';

const SurveyBanner = () => {
    return (
        <section className="bg-gradient-to-r from-orange-50 to-orange-100 py-12 px-4 relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-orange-200 rounded-full opacity-50 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-green-200 rounded-full opacity-50 blur-3xl"></div>

            <div className="max-w-5xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="bg-white rounded-3xl shadow-xl overflow-hidden border border-orange-100"
                >
                    <div className="flex flex-col md:flex-row">
                        {/* Icon Section */}
                        <div className="bg-gradient-to-br from-[#ea580c] to-[#c2410c] p-8 md:w-1/3 flex flex-col items-center justify-center text-white text-center">
                            <div className="bg-white/20 p-4 rounded-full mb-4">
                                <FileText size={48} className="text-white" />
                            </div>
                            <h3 className="text-2xl font-bold mb-2">We Value Your Feedback</h3>
                            <p className="text-orange-100 text-sm">Help us serve you better</p>
                        </div>

                        {/* Content Section */}
                        <div className="p-8 md:w-2/3 flex flex-col justify-center">
                            <span className="inline-block px-3 py-1 bg-green-100 text-green-800 text-xs font-semibold rounded-full w-max mb-4">
                                2 Minute Survey
                            </span>

                            <h4 className="text-xl md:text-2xl font-bold text-gray-800 mb-3">
                                ILERA EKO Drug Access Expansion Programme
                            </h4>

                            <p className="text-gray-600 mb-4 leading-relaxed">
                                Good day! LASHMA is conducting a survey to gather feedback on the community pharmacy programme.
                                Your responses will help us improve how medications are accessed to enrollees like you.
                            </p>

                            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-2">
                                <a
                                    href="https://forms.gle/HbgepBNmoKKVjDC16"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group flex items-center gap-2 bg-[#ea580c] hover:bg-[#c2410c] text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1"
                                >
                                    <span>Take the Questionnaire</span>
                                    <ExternalLink size={18} className="transition-transform group-hover:translate-x-1" />
                                </a>
                                <p className="text-sm font-medium text-gray-500 flex items-center cap-2">
                                    <span>Thank you for your time</span>
                                    <span className="ml-1 text-lg">🙏</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default SurveyBanner;
